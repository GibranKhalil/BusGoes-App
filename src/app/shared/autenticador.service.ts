import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Users } from '../user';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  redirectUrl: string = '';
  baseUrl: string = "http://localhost/Bus/php";
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  constructor(private httpClient: HttpClient) { }
  public userlogin(username:string, password:string) {
    return this.httpClient.post<any>(this.baseUrl + '/login.php', { username, password})
      .pipe(map(Users => {
        this.setToken(Users[0].name);
        this.getLoggedInName.emit(Users[0].name);
        return Users;
      }));
  }

  public userregistration(name:string, email:string, pwd:string) {
    return this.httpClient.post<any>(this.baseUrl + '/register.php', { name, email, pwd })
      .pipe(map(Users => {
        return Users;
      }));
  }

  //token
  setToken(token: string) {
    localStorage.setItem('token', token);
  }
  getToken() {
    return localStorage.getItem('token');
  }
  deleteToken() {
    localStorage.removeItem('token');
  }
  isLoggedIn() {
    const usertoken = this.getToken();
    if (usertoken != null) {
      return true
    }
    return false;
  }
}