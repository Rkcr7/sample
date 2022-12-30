import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';


import { StorageService } from './../_services/storage.service';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit {
  roles: any;
  isLoggedIn = false;
  isadmin = false;


  list = [
    {
      number: '1',
      name: 'Employee Dashboard',
      icon: 'fa fa-dashboard',
      routerl:"/emp-dashboard"
    },
    // {
    //   number: '2',
    //   name: 'Profile',
    //   icon: 'fa-solid fa-address-card',
    // },
  ];
  @Input() sideNavStatus: boolean = false;





  constructor(private storageService: StorageService,private authService: AuthService) {

       if (this.storageService.isLoggedIn()) {

      this.roles = this.storageService.getUser().roles;
      if(this.roles.includes("ROLE_ADMIN")||this.roles.includes("ROLE_HR")){
        this.isadmin=true;
      }
    }

  }

  ngOnInit(): void {}


}
