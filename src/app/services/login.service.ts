import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  
  baseUrl = 'http://localhost/SUPPLIER_WEB_PORTAL/';

  // login(loginData): Observable<ApiResponse> {
  //   return this.http.post<ApiResponse>(this.baseUrl + 'login.php', loginData);

 // }

}
