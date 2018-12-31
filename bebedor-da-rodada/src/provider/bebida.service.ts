import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { BebidaUsuario } from '../model/bebida_usuario';
import { Bebida } from '../model/bebida';

@Injectable({
  providedIn: 'root'
})
export class BebidaService {

  constructor(public http: HttpClient) { }

  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  private bebida = environment.apiUrl + '/bebidas';


  getBebidas(): Observable<Array<Bebida>> {
    return this.http.get<Array<Bebida>>(this.bebida) 
  }

  
}