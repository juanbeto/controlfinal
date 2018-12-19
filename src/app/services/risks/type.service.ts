
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from '../global';
import { riskstype } from '../../models/index_risks';

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  private url_service: string;
  public url: string;
  constructor(
    public _http: HttpClient
  ){
    this.url = GLOBAL.url+"risks/type";
  }

  create(type: riskstype): Observable<any>{
    let json = JSON.stringify(type);
    let params = "json= "+json;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.post<any>(this.url, params, {headers: headers});
  }

  getTypes(): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.get<any>(this.url, {headers: headers});

  }

  getType(id): Observable<any>{
        return this._http.get(this.url+'/'+id);
  }
}
