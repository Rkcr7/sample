import { Component } from '@angular/core';
import { StorageService } from './components/_services/storage.service';
import { AuthService } from './components/_services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {



  title = 'hrms-boilerplate';
  sideNavStatus: boolean = false;
  private roles: string[] = [];
  isLoggedIn = true;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;


  constructor(private storageService: StorageService, private authService: AuthService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();

    if (this.isLoggedIn) {

      const user = this.storageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_HR');

      this.username = user.username;
    }
  }

  logout(): void {
    this.authService.logout().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();
      },
      error: err => {
        console.log(err);
      }
    });

    window.location.reload();
  }

}



