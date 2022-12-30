import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StorageService } from '../components/_services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class DashHeaderService {
  constructor(private http: HttpClient,private storageService: StorageService) { }
  empObjId=this.storageService.getUser().id;

  url=`http://localhost:8080/dashboard/${this.empObjId}`;
  holidays_url="http://localhost:8080/holidays/";
  birthday_url="http://localhost:8080/birthdays/";

    users()
    {
      return this.http.get(this.url);
    }
    off()
    {
      return this.http.get(this.holidays_url);
    }
    birth()
    {
      return this.http.get(this.birthday_url);
    }


}
