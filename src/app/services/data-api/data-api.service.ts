import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User, UserLoginModel, UserMockData, UserRegistrationModel, Tokens } from 'sfs-data-model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

export const HTTP_URLS  = {
  getData: `${environment.api}/data`,
}
@Injectable({
  providedIn: 'root'
})
export class DataApiService {
  constructor(private http: HttpClient) {
    console.log('Data API Service init')
  }

  getBiblography(data: any): Observable<any> {
    return this.http.get(HTTP_URLS.getData, data);
  }
}
