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
  private usuario = environment.apiUrl + '/usuario';

  addUser(name: String): Observable<Object> {

    let user = {
      "nome_usuario": name
    }

    return this.http.post<Object>(this.usuario, user, {
      headers: this.headers
    });
  }
}