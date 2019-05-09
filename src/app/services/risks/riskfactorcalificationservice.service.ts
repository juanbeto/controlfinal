import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from '../global';

import { risksasignation } from '../../models/index_risks';
import { Riskfactorcalification } from '../../models/riskfactorcalification';

@Injectable({
  providedIn: 'root'
})
export class RiskfactorcalificationserviceService {

  private url_service: string;
  public url: string;
  public url2: string;
  public url3: string;
  constructor(
    public _http: HttpClient
  ){
    
   
    this.url= GLOBAL.url+"risks/calification";
    this.url2 = GLOBAL.url+"risks/calificationUsuarios";
    this.url3 = GLOBAL.url+"risks/calification/store";
  }

  create(_calification: Riskfactorcalification): Observable<any>{
    console.log(this.url);
    let json = JSON.stringify(_calification);
    let params = "json= "+json;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.post<any>(this.url, params, {headers: headers});
  }
  getUserAll(): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.get<any>(this.url2, {headers: headers});
  }

  getCalificationsAll(): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.get<any>(this.url, {headers: headers});
  }

  getCalificationByFactor(id_factor): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.get<any>(this.url+"/"+id_factor+"/factor", {headers: headers});
  }

  getCalification(id): Observable<any>{
    return this._http.get(this.url+'/'+id);
  }

  update(_calification : Riskfactorcalification, id): Observable<any>{
    let json = JSON.stringify(_calification);
    let params = "json= "+json;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.put(this.url+'/'+id,  params, {headers: headers});
  }

  delete(id): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.delete(this.url+'/'+id, {headers: headers});
  }

  

}
