import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { Package } from '../model/package';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  constructor(public http: HttpClient) { }

  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  private fieldURL = environment.apiUrl + '/packets';

  getPacotes(): Observable<Object> {
    return this.http.get<Object>(this.fieldURL)
  }

  getPacotesDisponiveis(): Observable<Array<Package>> {
    return this.http.get<Array<Package>>(this.fieldURL + "?distribution_center=true");
  }

  addPacote(pacote: Package): Observable<Object> {
    return this.http.post<Object>(this.fieldURL, pacote, {
      headers: this.headers
    });
  }

  updatePacote(idPackage: String): Observable<Object> {
    let payload = {
      "delivered": false,
      "distribution_center": false,
      "delivering": true
    };

    return this.http.patch<Object>(this.fieldURL + "/" + idPackage, payload, {
      headers: this.headers
    });
  }
}