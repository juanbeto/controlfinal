import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from '../global';
import { user } from '../../models/index_admin';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url_service: string;
  public url: string;
  constructor(
    public _http: HttpClient
  ){
    this.url = GLOBAL.url+"Admin/user";
  }

  create(_user: user): Observable<any>{
    let json = JSON.stringify(_user);
    let params = "json= "+json;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.post<any>(this.url, params, {headers: headers});
  }

  getFormats(): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.get<any>(this.url, {headers: headers});
  }

  getFormat(id): Observable<any>{
    console.log(this.url);
    return this._http.get(this.url+'/'+id);
  }

  getFormatBy(_user): Observable<any>{
    let json = JSON.stringify(_user);
    let params = "json= "+json;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.post<any>(this.url+'/search', params, {headers: headers});
  }

  update(_user: user, id): Observable<any>{
    let json = JSON.stringify(_user);
    let params = "json= "+json;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.put(this.url+'/'+id,  params, {headers: headers});
  }

  delete(id): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.delete(this.url+'/'+id, {headers: headers});
  }

  register(_user: user){
    let json = JSON.stringify(_user);
    let params = "json= "+json;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.post(this.url+'/login',params, {headers: headers});
  }
}
