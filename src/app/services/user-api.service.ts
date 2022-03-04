import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, UserMockData } from '../modules/profile/profile.model';

enum HttpUrls {
  register = 'register',
  login = 'login',
  restore = 'restore'
}
@Injectable()
export class UserApiService {
  constructor(private http: HttpClient) {
    console.log('User API Service init')
  }

  registration(data: any) {
    console.log(HttpUrls.register +': ', data);
    return false;
    return this.http.get(HttpUrls.register);
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
