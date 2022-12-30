import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../components/_services/auth.service';
import { StorageService } from '../components/_services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy {
  bodyTag: HTMLBodyElement = document.getElementsByTagName('body')[0];
  htmlTag: HTMLElement = document.getElementsByTagName('html')[0];
  form: any = {
    username: null,
    password: null,
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(
    private authService: AuthService,
    private storageService: StorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.bodyTag.classList.add('login-page');
    this.htmlTag.classList.add('login-page');
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.router.navigate(['/emp-dashboard']);
      this.roles = this.storageService.getUser().roles;
    }
  }

  onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe({
      next: (data) => {
        this.reloadPage();

        this.storageService.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.storageService.getUser().roles;
        console.log('auth-key', this.storageService.getUser().id);

        //this.router.navigate(['/emp-profile']);
      },
      error: (err) => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      },
    });
  }

  reloadPage(): void {
    window.location.reload();
  }
  clean(): void {
    window.sessionStorage.clear();
    localStorage.clear();
  }

  ngOnDestroy() {
    // remove the the body classes
    this.bodyTag.classList.remove('login-page');
    this.htmlTag.classList.remove('login-page');
  }
}
