import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) { }

  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  private fieldURL = environment.apiUrl + '/users';

  getUsers(): Observable<Object> {
    return this.http.get<Object>(this.fieldURL)
  }

  getUsersDisponiveis(): Observable<Object> {
    return this.http.get<Object>(this.fieldURL);
  }

  addUser(user: Object): Observable<Object> {
    return this.http.post<Object>(this.fieldURL + "/", user, {
      headers: this.headers
    });
  }
}