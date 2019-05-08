import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from '../global';
import { audit } from '../../models/index_audit';
import { user } from '../../models/adminuser';
import { LoginService } from '../login.service';

@Injectable({
  providedIn: 'root'
})
export class AuditService {
  private url_service: string;
  public url: string;
  public token;
  public identity;
  constructor(
    public _http: HttpClient,
    public _userLogin: LoginService
  ){
    this.url = GLOBAL.url+"audit/audit";
    this.token = this._userLogin.getToken();
    this.identity = this._userLogin.getIdentity();
  }

  create(_audit: audit, lists: user[]): Observable<any>{
    console.log(this.url);
    _audit.users = lists;
    let json = JSON.stringify(_audit);
    //json.users = JSON.stringify(lists);
    console.log(json);
    let params = "json= "+json;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                    .set('Authorization', this.token);
    return this._http.post<any>(this.url, params, {headers: headers});
  }

  getAudits(): Observable<any>{
    let params = 'json={"closed":"0"}';
    console.log(this.token);
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                    .set('Authorization', this.token);
    return this._http.post<any>(this.url+"/search", params, {headers: headers});
  }

  getAuditsByProgram(id_program): Observable<any>{
    let params = 'json={"id_program":"'+id_program+'"}';
    console.log(this.token);
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                    .set('Authorization', this.token);
    return this._http.post<any>(this.url+"/search", params, {headers: headers});
  }

  getAudit(id): Observable<any>{
    console.log(this.token);
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                    .set('Authorization', this.token);
    return this._http.get(this.url+'/'+id,  {headers: headers});
  }

  update(_audit:audit, id): Observable<any>{
    let json = JSON.stringify(_audit);
    let params = "json= "+json;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                    .set('Authorization', this.token);
    return this._http.put(this.url+'/'+id,  params, {headers: headers});
  }

  delete(id): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                    .set('Authorization', this.token);
    return this._http.delete(this.url+'/'+id, {headers: headers});
  }
}
