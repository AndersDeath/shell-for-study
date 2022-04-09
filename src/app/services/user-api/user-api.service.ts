import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, UserMockData } from 'sfs-data-model';
import { environment } from 'src/environments/environment';

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

  registration(data: any) {
    console.log(HttpUrls.registration +': ', data);
    return false;
    return this.http.get(HttpUrls.registration);
  }

  login(data: any) {
    console.log(HttpUrls.login +': ', data);
    return false;
    return this.http.get(HttpUrls.login);
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
