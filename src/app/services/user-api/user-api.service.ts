import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User, UserLoginModel, UserMockData, UserRegistrationModel } from 'sfs-data-model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

const HttpUrls  = {
  registration: `${environment.api}/auth/registration`,
  login: `${environment.api}/auth/login`,
  logout: `${environment.api}/auth/logout`,
  refresh: `${environment.api}/auth/refresh`,
  restore: `${environment.api}/auth/restore`,
  profile: `${environment.api}/profile`

}
@Injectable()
export class UserApiService {
  constructor(private http: HttpClient) {
    console.log('User API Service init')
  }

  registration(data: UserRegistrationModel) {
    console.log(HttpUrls.registration +': ', data);
    return this.http.post(HttpUrls.registration, data);
  }

  login(data: any): Observable<any> {
    console.log('sqweqw',data);
    // console.log(HttpUrls.login +': ', data);
    return this.http.post(HttpUrls.login, data);
  }

  getProfile(data: any): Observable<any> {
    console.log(data);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + data.access_token
    });
    return this.http.get(HttpUrls.profile,  {headers: headers});
  }

  restore(data: any) {
    console.log(HttpUrls.restore +': ', data);
    return false;
    return this.http.get(HttpUrls.restore);
  }

  getUserData():User {
    return new User(UserMockData);
  }
}
