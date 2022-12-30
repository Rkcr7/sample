import { StorageService } from './../_services/storage.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DashHeaderService } from 'src/app/servies/dash-header.service';
import { AuthService } from '../_services/auth.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() sideNavToggled = new EventEmitter<boolean>();
  menuStatus: boolean = false;
  menu1 : string = "My Profile";
  menu2 : string = "Settings";
  menu3 : string = "Logout";
  buttonToggled : boolean = false;

  users:any;
  constructor(private storageService: StorageService, private authService: AuthService,private dashHeader:DashHeaderService) {
    dashHeader.users().subscribe((data)=>{
      console.warn("data",data);
      this.users=data
    });

  }

  ngOnInit(): void {}



  SideNavToggled() {
    this.menuStatus = !this.menuStatus;
    this.sideNavToggled.emit(this.menuStatus);
  }
  onButtonClicked($event:any): void {
    this.buttonToggled =!this.buttonToggled;
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
