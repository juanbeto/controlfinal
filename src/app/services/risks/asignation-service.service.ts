import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from '../global';

import { risksasignation } from '../../models/index_risks';

@Injectable({
  providedIn: 'root'
})
export class AsignationServiceService {
  private url_service: string;
  public url: string;
  public url2: string;
  constructor(
    public _http: HttpClient
  ){
    this.url = GLOBAL.url+"risks/asignation";
    this.url2 = GLOBAL.url+"risks/asignation/new";
  }

  create(_asignation: risksasignation): Observable<any>{
    console.log(this.url);
    let json = JSON.stringify(_asignation);
    let params = "json= "+json;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.post<any>(this.url, params, {headers: headers});
  }

  getAsignationsAll(): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.get<any>(this.url, {headers: headers});
  }

  getAsignationByAudit(id_asignation): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.get<any>(this.url+"/"+id_asignation+"/audit", {headers: headers});
  }

  getAsignation(id): Observable<any>{
    return this._http.get(this.url+'/'+id);
  }

  update(_asignation:risksasignation, id): Observable<any>{
    let json = JSON.stringify(_asignation);
    let params = "json= "+json;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.put(this.url+'/'+id,  params, {headers: headers});
  }

  delete(id): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.delete(this.url+'/'+id, {headers: headers});
  }
}
