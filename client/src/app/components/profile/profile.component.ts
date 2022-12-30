import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { ProfileDataService } from 'src/app/servies/profile-data.service';
import { AuthService } from '../_services/auth.service';
import { HttpClient } from '@angular/common/http';

import { StorageService } from './../_services/storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  roles: any;
  generalData: any;
  personalData: any;
  emergencyContactsData: any;
  bank_data: any;
  education_Data: any;
  family_Data: any;
  profesion_Data: any;
  pc: any;
  profession_ex: any;
  profession_ex2: any;

  Institution_name: any;
  Degree: any;
  Degree_start_year: any;
  Degree_end_year: any;

  name: any;
  relation: any;
  dob: any;
  phone: any;
  designation: any;
  dobprofile: any;

  ename: any;
  erelation: any;

  ephone: any;
  images: any;
  empObjId = this.storageService.getUser().id;

  url = `http://localhost:8080/dashboard/${this.empObjId}`;

  constructor(
    private profileData: ProfileDataService,
    private storageService: StorageService,
    private http: HttpClient
  ) {
    // if (this.storageService.isLoggedIn()) {

    //   this.roles = this.storageService.getUser().roles;
    //   if(this.roles.includes("ROLE_ADMIN")||this.roles.includes("ROLE_HR")){
    //     this.roles="HELLOOO";
    //   }
    // }

    profileData.generalData().subscribe((data) => {
      // console.log(data);
      var dob1;

      // console.log(data);
      this.generalData = data;
      dob1 = this.generalData.dob;
      dob1 = dob1.substring(0, 10);
      this.dobprofile = moment(dob1).format('MMM Do YYYY');
    });

    profileData.personalData().subscribe((data) => {
      // console.log(data);
      this.personalData = data;
    });

    profileData.emergencyData().subscribe((data) => {
      // console.log(data);
      this.emergencyContactsData = data;
      this.ename = this.emergencyContactsData.values[0];
      this.erelation = this.emergencyContactsData.values[0];
      // this.dob = this.family_Data.values[0];
      this.ephone = this.emergencyContactsData.values[0];
    });

    profileData.bankData().subscribe((data) => {
      this.bank_data = data;
    });

    profileData.educationData().subscribe((data) => {
      this.education_Data = data;
      this.Institution_name = this.education_Data.values[0];
      this.Degree = this.education_Data.values[0];
      this.Degree_start_year = this.education_Data.values[0];
      this.Degree_end_year = this.education_Data.values[0];
    });

    profileData.familyData().subscribe((data) => {
      this.family_Data = data;
      this.name = this.family_Data.values[0];
      this.relation = this.family_Data.values[0];
      this.dob = this.family_Data.values[0];
      this.phone = this.family_Data.values[0];
    });
    profileData.profesionalData().subscribe((data) => {
      this.profesion_Data = data;
      this.profession_ex = this.profesion_Data.values[0].professional_info[1];
      this.profession_ex2 = this.profesion_Data.values[0].professional_info[2];
    });

    this.pc = storageService.getUser().id;
  }

  ngOnInit(): void {}

  selectImage(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.images = file;
      this.onSubmit();
      this.reloadPage();
    }
  }
  onSubmit() {
    const formData = new FormData();
    formData.append('profile', this.images);

    this.http.patch<any>(`http://localhost:8080/upload/${this.empObjId}`, formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }
  reloadPage(): void {
    window.location.reload();
  }
}
