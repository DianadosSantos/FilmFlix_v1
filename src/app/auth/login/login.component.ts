import { AuthService } from './../../core/services/auth/auth.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('login') loginForm!:NgForm;

  onSubmit(){
    const email = this.loginForm.value.email as string;
    const password = this.loginForm.value.password as string;

    this.authService.login(email, password).subscribe({
      next: (creds) =>{
        //TO DO: Ir pra home quando logar.
      },
      error:(err)=>{
        let message = 'Ocorreu um erro';
        switch(err.code) {
          case "auth/invalid-email":
            message = 'Email inválido';
            break
          case "auth/user-not-found":
            message = 'Usuário não encontrado';
            break;
        }
        this.snackBar.open(message, 'X' ,{
          duration:5000,
          horizontalPosition:'end'
        });
      },
    });
  }

  constructor(private authService: AuthService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }



}
