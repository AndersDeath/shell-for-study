import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User, UserLoginModel, UserMockData, UserRegistrationModel, Tokens } from 'sfs-data-model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

export const HTTP_URLS  = {
  registration: `${environment.api}/auth/registration`,
  login: `${environment.api}/auth/login`,
  logout: `${environment.api}/auth/logout`,
  refresh: `${environment.api}/auth/refresh`,
  restore: `${environment.api}/auth/restore`,
  profile: `${environment.api}/profile`,
  checkAuth: `${environment.api}/check-auth`,
}
@Injectable()
export class UserApiService {
  constructor(private http: HttpClient) {
    console.log('User API Service init')
  }

  registration(data: UserRegistrationModel) {
    console.log(HTTP_URLS.registration +': ', data);
    return this.http.post(HTTP_URLS.registration, data);
  }

  logout(data: Tokens) {
    console.log('This is a logout');
    return this.http.post(HTTP_URLS.logout, data);
  }

  login(data: any): Observable<any> {
    // console.log('sqweqw',data);
    // console.log(HttpUrls.login +': ', data);
    return this.http.post(HTTP_URLS.login, data);
  }

  getProfile(data: any): Observable<any> {
    return this.http.get(HTTP_URLS.profile, data);
  }

  saveProfile(data: any): Observable<any> {
    return this.http.post(HTTP_URLS.profile, data);
  }

  refresh(data: any): Observable<any> {
    return this.http.post(HTTP_URLS.refresh, data);
  }


  checkAuth(data: any): Observable<any> {
    console.log('checkAuth data: ', data);
    return this.http.get(HTTP_URLS.checkAuth)
  }

  restore(data: any) {
    console.log(HTTP_URLS.restore +': ', data);
    return false;
    return this.http.get(HTTP_URLS.restore);
  }

  getUserData():User {
    return new User(UserMockData);
  }
}
