import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user$?: Observable<User | undefined>

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.user$ = this.authService.user;
  }
  logout(){
    this.authService.logout();
  }

}
