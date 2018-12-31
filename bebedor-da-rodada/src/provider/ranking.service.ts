import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { BebidaUsuario } from '../model/bebida_usuario';
import { Bebida } from '../model/bebida';
import { Ranking } from '../model/ranking';

@Injectable({
  providedIn: 'root'
})
export class RankingService {

  constructor(public http: HttpClient) { }

  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  private bebida = environment.apiUrl + '/rank_geral';


  getRanking(): Observable<Array<Ranking>> {
    return this.http.get<Array<Ranking>>(this.bebida) 
  }
}