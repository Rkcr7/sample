import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StorageService } from '../components/_services/storage.service';

@Injectable({
  providedIn: 'root',
})
export class ProfileDataService {
  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) {}

  empObjId = this.storageService.getUser().id;
  // url = `http://localhost:8080/profiledetail/${this.pc}`;
  general_data_url = `http://localhost:8080/general_detail/${this.empObjId}`;
  personal_data_url = `http://localhost:8080/personal_detail/${this.empObjId}`;
  emergency_data_url = `http://localhost:8080/emergency_detail/${this.empObjId}`;

  bank_data_url = `http://localhost:8080/bank_detail/${this.empObjId}`;
  education_data_url = `http://localhost:8080/education_detail/${this.empObjId}`;
  family_data_url = `http://localhost:8080/family_detail/${this.empObjId}`;
  professional_data_url = `http://localhost:8080/professional_detail/${this.empObjId}`;

  AllEmployee_url = `http://localhost:8080/getall`;

  projects_url = `http://localhost:8080/getallproject`;

  project_role = `http://localhost:8080/search/HR`;

  generalData() {
    return this.http.get(this.general_data_url);
  }

  personalData() {
    return this.http.get(this.personal_data_url);
  }

  emergencyData() {
    return this.http.get(this.emergency_data_url);
  }

  bankData() {
    return this.http.get(this.bank_data_url);
  }
  educationData() {
    return this.http.get(this.education_data_url);
  }
  familyData() {
    return this.http.get(this.family_data_url);
  }
  profesionalData() {
    return this.http.get(this.professional_data_url);
  }
  allempData() {
    return this.http.get(this.AllEmployee_url);
  }

  projectsData() {
    return this.http.get(this.projects_url);
  }

  project_Role() {
    return this.http.get(this.project_role);
  }
}
