import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { BebidaUsuario } from '../model/bebida_usuario';

@Injectable({
  providedIn: 'root'
})
export class BebidaUsuarioService {

  constructor(public http: HttpClient) { }

  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  private bebida_usuario = environment.apiUrl + '/bebida_usuarios';


  getBebidaUsuario(usuario:String): Observable<BebidaUsuario> {
    return this.http.get<BebidaUsuario>(this.bebida_usuario + "/" + usuario) 
  }


  addBebidaUsuario(nome_usuario: String, nome_bebida: String): Observable<Object> {

    let user = {
        "nome_usuario": nome_usuario,
        "nome_bebida": nome_bebida
    }

    return this.http.post<Object>(this.bebida_usuario, user, {
      headers: this.headers
    });
  }

}