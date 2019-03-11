import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from '../global';
import { audit, auditinform } from '../../models/index_audit';
import { LoginService } from '../login.service';

@Injectable({
  providedIn: 'root'
})
export class InformService {
  private url_service: string;
  public url: string;
  public token;
  public identity;
  constructor(
    public _http: HttpClient,
    public _userLogin: LoginService
  ){
    this.url = GLOBAL.url+"audit/inform";
    this.token = this._userLogin.getToken();
    this.identity = this._userLogin.getIdentity();
  }

  create(_inform: auditinform): Observable<any>{
    let json = JSON.stringify(_inform);
    let params = "json= "+json;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                    .set('Authorization', this.token);
    return this._http.post<any>(this.url, params, {headers: headers});
  }

  getInforms(): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                    .set('Authorization', this.token);
    return this._http.get<any>(this.url, {headers: headers});
  }

  getHallazgos(id_audit): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                    .set('Authorization', this.token);
    return this._http.get<any>(this.url+'/hallazgo/'+id_audit, {headers: headers});
  }

  getInformByAudit(id_audit): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                    .set('Authorization', this.token);
    return this._http.get<any>(this.url+"/"+id_audit+"/audit", {headers: headers});
  }

  getInform(id): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                    .set('Authorization', this.token);
    return this._http.get<any>(this.url+"/"+id, {headers: headers});
  }

  update(_inform:auditinform, id): Observable<any>{
    let json = JSON.stringify(_inform);
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
