import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { DeleteComponent } from './../delete/delete.component';
import { EditformComponent } from './../editform/editform.component';
import { AddformComponent } from './../addform/addform.component';
//  import {MatPaginator} from '@angular/material/paginator';
//  import {MatTableModule} from '@angular/material/table';
import { AuthService } from '../../_services/auth.service';
import { StorageService } from '../../_services/storage.service';

import { ProfileDataService } from 'src/app/servies/profile-data.service';
@Component({
  selector: 'app-allemployees',
  templateUrl: './allemployees.component.html',
  styleUrls: ['./allemployees.component.css'],
})
export class AllemployeesComponent implements OnInit {
  isadmin = false;
  p: number = 1;
  itemsPerPage: number = 8;
  totalnum: any;
  roles: any;

  // paginator:any;
  // @ViewChild(MatPaginator) paginator : MatPaginator;

  @ViewChild(MatMenuTrigger)
  trigger!: MatMenuTrigger;

  someMethod() {
    this.trigger.openMenu();
  }
  allemp: any;

  constructor(
    private storageService: StorageService,
    private authService: AuthService,
    public dialog: MatDialog,
    private profileData: ProfileDataService
  ) {
    // for validating admin

    if (this.storageService.isLoggedIn()) {
      this.roles = this.storageService.getUser().roles;
      if (this.roles.includes('ROLE_ADMIN') || this.roles.includes('ROLE_HR')) {
        this.isadmin = true;
      }
    }

    profileData.allempData().subscribe((data: any) => {
      // console.log(data);
      this.allemp = data;
      this.totalnum = data.length;
    });
  }
  openAddform() {
    this.dialog.open(AddformComponent);
  }

  openEditform() {
    this.dialog.open(EditformComponent);
  }

  deleteEmployee() {
    this.dialog.open(DeleteComponent);
  }

  ngOnInit(): void {
    // this.datasource.paginator=this.MatPaginator;
  }
}
