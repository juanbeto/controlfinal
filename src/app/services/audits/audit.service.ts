import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from '../global';
import { audit } from '../../models/index_audit';

@Injectable({
  providedIn: 'root'
})
export class AuditService {
  private url_service: string;
  public url: string;
  constructor(
    public _http: HttpClient
  ){
    this.url = GLOBAL.url+"audit/audit";
  }

  create(_audit: audit): Observable<any>{
    console.log(this.url);
    let json = JSON.stringify(_audit);
    let params = "json= "+json;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.post<any>(this.url, params, {headers: headers});
  }

  getAudits(): Observable<any>{
    let params = 'json={"closed":"0"}';
    console.log(params);
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.post<any>(this.url+"/search", params, {headers: headers});
  }

  getAuditsByProgram(id_program): Observable<any>{
    let params = 'json={"id_program":"'+id_program+'"}';
    console.log(params);
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.post<any>(this.url+"/search", params, {headers: headers});
  }

  getAudit(id): Observable<any>{
    return this._http.get(this.url+'/'+id);
  }

  update(_audit:audit, id): Observable<any>{
    let json = JSON.stringify(_audit);
    let params = "json= "+json;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.put(this.url+'/'+id,  params, {headers: headers});
  }

  delete(id): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.delete(this.url+'/'+id, {headers: headers});
  }
}
