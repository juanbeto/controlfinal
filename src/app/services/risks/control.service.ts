import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from '../global';
import { riskscontrol } from '../../models/index_risks';

@Injectable({
  providedIn: 'root'
})
export class ControlService {

  private url_service: string;
  public url: string;
  public url2: string;
  constructor(
    public _http: HttpClient
  ){
    this.url = GLOBAL.url+"risks/control";
    this.url2 = GLOBAL.url;
  }

  create(_control: riskscontrol): Observable<any>{
    let json = JSON.stringify(_control);
    let params = "json= "+json;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.post<any>(this.url, params, {headers: headers});
  }

  getControls(): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.get<any>(this.url, {headers: headers});
  }

  getControlByRisks(id_risks): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.get<any>(this.url+"/"+id_risks,{headers: headers});
  }
  
  getControl(id): Observable<any>{
    return this._http.get(this.url+'/'+id);
  }

  update(_control:riskscontrol, id): Observable<any>{
    let json = JSON.stringify(_control);
    let params = "json= "+json;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.put(this.url+'/'+id,  params, {headers: headers});
  }

  delete(id): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.delete(this.url+'/'+id, {headers: headers});
  }
}
