import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from '../global';
import { auditareas } from '../../models/index_audit';

@Injectable({
  providedIn: 'root'
})
export class AreasService {

  private url_service: string;
  public url: string;
  constructor(
    public _http: HttpClient
  ){
    this.url = GLOBAL.url+"audit/areas";
  }

  create(_area: auditareas): Observable<any>{
    console.log(this.url);
    let json = JSON.stringify(_area);
    let params = "json= "+json;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.post<any>(this.url, params, {headers: headers});
  }

  getAreas(): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.get<any>(this.url, {headers: headers});
  }

  getAreasByAudit(id_audit): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.get<any>(this.url+"/"+id_audit+"/audit", {headers: headers});
  }

  getArea(id): Observable<any>{
    return this._http.get(this.url+'/'+id);
  }

  update(_area:auditareas, id): Observable<any>{
    let json = JSON.stringify(_area);
    let params = "json= "+json;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.put(this.url+'/'+id,  params, {headers: headers});
  }

  delete(id): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.delete(this.url+'/'+id, {headers: headers});
  }
}
