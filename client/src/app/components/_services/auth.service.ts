import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/auth/';
const registerurl = 'http://localhost:8080/create/';
const addurl = 'http://localhost:8080/add-employee/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signin',
      {
        username,
        password,
      },
      httpOptions
    );
  }

  registerUser(user: Array<String>) {
    return this.http.post(
      registerurl,
      {
        display_name: user[0],
        email: user[1],
        password: user[2],
        username: user[3],
        designation: user[4],
        gender: user[5],
        first_name: user[6],
        last_name: user[7],
      },
      {
        responseType: 'text',
      }
    );
  }

  addUser(user: Array<String>) {
    return this.http.post(
      addurl,
      {
        display_name: user[0],
        email: user[1],
        password: user[2],
        username: user[3],
        designation: user[4],
        gender: user[5],
        first_name: user[6],
        last_name: user[7],
        joindate: user[8],
        emp_id: user[9],
      },
      {
        responseType: 'text',
      }
    );
  }

  logout(): Observable<any> {
    return this.http.post(AUTH_API + 'signout', {}, httpOptions);
  }
}
