import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../_services/auth.service";
import { StorageService } from '../../_services/storage.service';
import { Router } from "@angular/router";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {RegistercompleteComponent} from '../registercomplete/registercomplete.component'

import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isLoggedIn = false;
repeatpass:String = 'none';
  errorMessage = 'User Already Exist';
   isSuccessful = false;
  isSignUpFailed = false;


  constructor(public dialog: MatDialog,private authService: AuthService, private storageService: StorageService,private router: Router) {

  }
  ngOnInit(): void {

    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.router.navigate(['/emp-dashboard']);

    }
  }


  registerform = new FormGroup({
    display_name: new FormControl("",[Validators.required,Validators.minLength(2),Validators.pattern("[a-zA-Z].*")]),
    first_name: new FormControl("",[Validators.required,Validators.minLength(2),Validators.pattern("[a-zA-Z].*")]),

    last_name: new FormControl("",[Validators.required,Validators.minLength(2),Validators.pattern("[a-zA-Z].*")]),
    username: new FormControl("",[Validators.required,Validators.minLength(3),Validators.pattern("[a-zA-Z].*")]),
    email: new FormControl("", [Validators.required,Validators.email]),
    password: new FormControl("",[Validators.minLength(8),
      Validators.required,
      Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$")

    ]),
    rpassword: new FormControl("",[Validators.required]),
    gender: new FormControl("",[Validators.required]),
    designation:  new FormControl(),

  });

  registerSubmitted(){
    console.log(this.registerform.get("display_name"));
    if(this.password.value == this.rpassword.value){

      //alert("I am an alert box!");

      this.authService.registerUser([
        this.registerform.value.display_name,
        this.registerform.value.email,
        this.registerform.value.password,
        this.registerform.value.username,
        this.registerform.value.designation,
        this.registerform.value.gender,
        this.registerform.value.first_name,
        this.registerform.value.last_name,




      ]).subscribe({


        next: data => {
          console.log(data);
          this.isSuccessful = true;
          this.isSignUpFailed = false;
          this.registersuccess();

        },
        error: err => {
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
        }



      }


      )

    }
    else{
      this.repeatpass='inline'
    }

  }



  registersuccess() {
    this.dialog.open(RegistercompleteComponent);
    }


get displayname(): FormControl{
  return this.registerform.get('display_name') as FormControl;
}

get firstname(): FormControl{
  return this.registerform.get('first_name') as FormControl;
}

get lastname(): FormControl{
  return this.registerform.get('last_name') as FormControl;
}


get email(): FormControl{
  return this.registerform.get('email') as FormControl;
}

get username(): FormControl{
  return this.registerform.get('username') as FormControl;
}

get password(): FormControl{
  return this.registerform.get('password') as FormControl;
}

get rpassword(): FormControl{
  return this.registerform.get('rpassword') as FormControl;
}

get designation(): FormControl{
  return this.registerform.get('designation') as FormControl;
}

get gender1(): FormControl{
  return this.registerform.get('gender') as FormControl;
}




  }


