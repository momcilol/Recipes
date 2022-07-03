import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Account } from '../model/User/account';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = environment.baseUrl; 

  constructor(private httpClient: HttpClient) { }

  register(username: string): Observable<Account> {
    return this.httpClient.post<Account>(this.baseUrl + "/users/connect", {
      username: username
    },{
      headers: new HttpHeaders({'Content-Type':  'application/json'})
    })
  }

  login(username: string, hash: string): Observable<any> {
    return this.httpClient.get(this.baseUrl + "/mealplanner/" + username + "/shopping-list", {
      params: {
        hash: hash
      }
    })
  }
}
