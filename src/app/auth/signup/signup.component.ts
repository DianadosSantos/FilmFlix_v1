import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  @ViewChild('signup') signupForm!: NgForm;

  onSubmit() {
    console.log(this.signupForm.value);

    // TODO: Integrar com AuthService
  }


  constructor() { }

  ngOnInit(): void {
  }

}
