import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


import { GLOBAL } from './global';
import { riskseffects, riskseffectscauses } from '../models/index_risks';

@Injectable({
  providedIn: 'root'
})
export class RisksEffectsCausesServiceService {

  private url_service: string;
  public url: string;
  constructor(
    public _http: HttpClient
  ){
    this.url = GLOBAL.url+"risks/riskecauses";
  }

  create(_effects: riskseffectscauses): Observable<any>{
    let json = JSON.stringify(_effects);
    let params = "json= "+json;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.post<any>(this.url, params, {headers: headers});
  }

  getCausesEfects(): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.get<any>(this.url, {headers: headers});
  }

  getCauseEfectsBy(id_effects): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.get<any>(this.url+"/"+id_effects, {headers: headers});
  }

  getCauseEfect(id): Observable<any>{
    return this._http.get(this.url+'/'+id);
  }

  update(_cause:riskseffectscauses, id): Observable<any>{
    let json = JSON.stringify(_cause);
    let params = "json= "+json;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.put(this.url+'/'+id,  params, {headers: headers});
  }

  delete(id): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.delete(this.url+'/'+id, {headers: headers});
  }
}