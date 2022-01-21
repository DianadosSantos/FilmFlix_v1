import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/models/user';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { UploadImageService } from 'src/app/core/services/upload-image/upload-image.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user$!: Observable<User | undefined>;

  profile?: File;

  @ViewChild('profileInput') profileInput!: ElementRef;

  constructor(
    private authService: AuthService,
    private uploadService: UploadImageService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.user$ = this.authService.user;
  }

  setProfilePicture() {
    this.profile = this.profileInput.nativeElement.files[0];
  }

  onSubmit(profileForm: NgForm) {
    if (this.profile) {
      this.uploadService.upload(this.profile).subscribe({
        next: (url) => {
          const user: User = {
            ...profileForm.value,
            profile: url,
          };
          this.uploadProfile(user);
        },
      });
    } else {
      this.uploadProfile(profileForm.value as User);
    }
  }

  uploadProfile(user: User) {
    this.authService.update(user).subscribe({
      next: () => {
        this.snackBar.open('Atualizado com sucesso!', 'Fechar', {
          duration: 3000,
        });
      },
      error: () => {
        this.snackBar.open('Um error ocorreu!', 'Fechar', {
          duration: 3000,
        });
      },
    });
  }
}
