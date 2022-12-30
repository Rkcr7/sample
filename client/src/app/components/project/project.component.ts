import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { CreateformComponent } from './createform/createform.component';
import { ProfileDataService } from 'src/app/servies/profile-data.service';
import { DeleteComponent } from '../employees/delete/delete.component';
import { EditformComponent } from '../employees/editform/editform.component';
import { AuthService } from '../_services/auth.service';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit {
  allprojects: any;
  projectname: any;
  arrayOfDescriptions: any;
  isClicked: boolean = false;
  generalData: any;
  name: any;
  projects: any;
  allemp: any;
  reqTeam: any;
  isadmin = false;
  roles: any;

  @ViewChild(MatMenuTrigger)
  trigger!: MatMenuTrigger;
  somemehtod() {
    this.trigger.openMenu();
  }

  constructor(
    private storageService: StorageService,
    private authService: AuthService,
    public dialog: MatDialog,
    private profiled: ProfileDataService
  ) {
    // for validating admin

    if (this.storageService.isLoggedIn()) {
      this.roles = this.storageService.getUser().roles;
      if (this.roles.includes('ROLE_ADMIN') || this.roles.includes('ROLE_HR')) {
        this.isadmin = true;
      }
    }

    profiled.project_Role().subscribe((data) => {
      // console.log(data);
      this.generalData = data;
      //  this.name=this.generalData.values[0];
    });

    profiled.projectsData().subscribe((data) => {
      // console.log(data);
      this.allprojects = data;
      this.projectname = this.allprojects.alldata[0].projects[0].project_title;
      this.projects = this.allprojects.alldata[0].projects;
    });

    profiled.allempData().subscribe((data: any) => {
      // console.log(data);
      this.allemp = data;
      //  this.totalnum = data.length;
      this.reqTeam = this.allemp.alldata[0];
    });
  }
  openProjectform() {
    this.dialog.open(CreateformComponent);
  }

  onClick($event: any) {
    this.isClicked = true;
    return this.isClicked;
  }

  openEditform() {
    this.dialog.open(EditformComponent);
  }

  deleteEmployee() {
    this.dialog.open(DeleteComponent);
  }

  ngOnInit(): void {}
}
