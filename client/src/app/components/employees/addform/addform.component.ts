import { AddSuccessComponent } from '../add-success/add-success.component';
import { Component, OnInit } from '@angular/core';
import { RegistercompleteComponent } from './../../registeration/registercomplete/registercomplete.component';
import { StorageService } from '../../_services/storage.service';
import { AuthService } from '../../_services/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
  styleUrls: ['./addform.component.css'],
})
export class AddformComponent implements OnInit {
  today = new Date();
  isLoggedIn = false;
  errorMessage = 'User Already Exist';
  isSuccessful = false;
  isSignUpFailed = false;

  constructor(
    public dialog: MatDialog,
    private authService: AuthService,
    private storageService: StorageService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  addform = new FormGroup({
    display_name: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.pattern('[a-zA-Z].*'),
    ]),
    first_name: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.pattern('[a-zA-Z].*'),
    ]),

    last_name: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.pattern('[a-zA-Z].*'),
    ]),
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('[a-zA-Z].*'),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('password'),
    //   Validators.required,
    //   Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$")

    // ]),
    // rpassword: new FormControl("",[Validators.required]),
    gender: new FormControl('', [Validators.required]),
    designation: new FormControl('', [Validators.required]),
    joindate: new FormControl(),
    employeeId: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]+'),
    ]),
  });

  addSubmitted() {
    console.log(this.addform.get('display_name'));

    //alert("I am an alert box!");
    // if(this.password.value == this.rpassword.value){
    this.authService
      .addUser([
        this.addform.value.display_name,
        this.addform.value.email,
        this.addform.value.password,
        this.addform.value.username,
        this.addform.value.designation,
        this.addform.value.gender,
        this.addform.value.first_name,
        this.addform.value.last_name,
        this.addform.value.joindate,
        this.addform.value.employeeId,
      ])
      .subscribe({
        next: (data) => {
          console.log(data);
          //this.registersuccess();
          this.isSuccessful = true;
          this.isSignUpFailed = false;
          this.addsuccess();
        },

        error: (err) => {
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
          console.log(err);
        },
      });
    //}
    // else{
    //       this.repeatpass='inline'
    //     }
  }

  addsuccess() {
    this.dialog.open(AddSuccessComponent);
  }

  get displayname(): FormControl {
    return this.addform.get('display_name') as FormControl;
  }

  get firstname(): FormControl {
    return this.addform.get('first_name') as FormControl;
  }

  get lastname(): FormControl {
    return this.addform.get('last_name') as FormControl;
  }

  get email(): FormControl {
    return this.addform.get('email') as FormControl;
  }

  get username(): FormControl {
    return this.addform.get('username') as FormControl;
  }

  get empid(): FormControl {
    return this.addform.get('employeeId') as FormControl;
  }

  // get rpassword(): FormControl{
  //   return this.addform.get('rpassword') as FormControl;
  // }

  get designation(): FormControl {
    return this.addform.get('designation') as FormControl;
  }

  get gender1(): FormControl {
    return this.addform.get('gender') as FormControl;
  }
}
