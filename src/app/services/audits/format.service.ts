import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from '../global';
import { auditformat } from '../../models/index_audit';
import { LoginService } from '../login.service';


@Injectable({
  providedIn: 'root'
})
export class FormatService {

  private url_service: string;
  public url: string;
  public token;
  public identity;
  constructor(
    public _http: HttpClient,
    public _userLogin: LoginService
  ){
    this.url = GLOBAL.url+"audit/format";
    this.token = this._userLogin.getToken();
    this.identity = this._userLogin.getIdentity();
  }

  create(format: auditformat): Observable<any>{
    let json = JSON.stringify(format);
    let params = "json= "+json;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                    .set('Authorization', this.token);
    return this._http.post<any>(this.url, params, {headers: headers});
  }

  getFormats(): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                    .set('Authorization', this.token);
    return this._http.get<any>(this.url, {headers: headers});
  }

  getFormat(id): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                    .set('Authorization', this.token);
    return this._http.get(this.url+'/'+id,  {headers: headers});
  }

  getFormatBy(format): Observable<any>{
    let json = JSON.stringify(format);
    let params = "json= "+json;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                    .set('Authorization', this.token);
    return this._http.post<any>(this.url+'/search', params, {headers: headers});
  }

  update(format:auditformat, id): Observable<any>{
    let json = JSON.stringify(format);
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
