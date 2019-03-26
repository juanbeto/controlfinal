import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from '../global';

import { risksasignation } from '../../models/index_risks';
import { Riskfactorcalification } from '../../models/riskfactorcalification';
import { Riskprobabilitycalification } from '../../models/riskprobabilitycalification';

@Injectable({
  providedIn: 'root'
})
export class RiskprobabilitycalificationService {
  private url_service: string;
  public url: string;
  public url2: string;
  constructor(
    public _http: HttpClient
  ){
    this.url = GLOBAL.url+"risks/probability";
    this.url2 = GLOBAL.url+"risks/calificationUsuarios";
  }

  create(_calification: Riskprobabilitycalification): Observable<any>{
    console.log(this.url);
    let json = JSON.stringify(_calification);
    let params = "json= "+json;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.post<any>(this.url, params, {headers: headers});
  }


  getProbabilityCalificationsAll(): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.get<any>(this.url, {headers: headers});
  }
  
  getUserAll(): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.get<any>(this.url2, {headers: headers});
  }

  

  getCalificationByProbability(id_probability): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.get<any>(this.url+"/"+id_probability+"/factor", {headers: headers});
  }

  getCalification(id): Observable<any>{
    return this._http.get(this.url+'/'+id);
  }

  update(_calification : Riskprobabilitycalification, id): Observable<any>{
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
