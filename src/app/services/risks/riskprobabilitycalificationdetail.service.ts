import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from '../global';

import { risksasignation } from '../../models/index_risks';
import { Riskfactorcalificationdetail } from '../../models/riskfactorcalificationdetail';
import { Riskprobabilitycalificationdetail } from '../../models/riskprobabilitycalificationdetail';


@Injectable({
  providedIn: 'root'
})
export class RiskprobabilitycalificationdetailService {

  private url_service: string;
  public url: string;
  public url2: string;
  constructor(
    public _http: HttpClient
  ){
    this.url = GLOBAL.url+"risks/probabilityDetail";
    this.url2 = GLOBAL.url+"risks/risks/valores";
  }

  create(_calificationDetail: Riskprobabilitycalificationdetail): Observable<any>{
    console.log(this.url);
    let json = JSON.stringify(_calificationDetail);
    let params = "json= "+json;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.post<any>(this.url, params, {headers: headers});
  }
  getvaloresAll(): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.get<any>(this.url2, {headers: headers});
  }

  getProbabilityCalificationDetailAll(): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.get<any>(this.url, {headers: headers});
  }

  getCalificcationDetailByprobability(id_calification): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.get<any>(this.url+"/"+id_calification+"/calification", {headers: headers});
  }

  getProbabilityCalificationDetail(id): Observable<any>{
    return this._http.get(this.url+'/'+id);
  }

  update(_calificationDetail: Riskfactorcalificationdetail, id): Observable<any>{
    let json = JSON.stringify(_calificationDetail);
    let params = "json= "+json;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.put(this.url+'/'+id,  params, {headers: headers});
  }

  delete(id): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.delete(this.url+'/'+id, {headers: headers});
  }
}
