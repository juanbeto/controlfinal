import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from '../global';
import { riskscontroltype } from '../../models/index_risks';

@Injectable({
  providedIn: 'root'
})
export class ControlTypeService {


    private url_service: string;
    public url: string;
    constructor(
      public _http: HttpClient
    ){
      this.url = GLOBAL.url+"risks/controltype";
    }

    getControlTypes(): Observable<any>{
      let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
      return this._http.get<any>(this.url, {headers: headers});

    }

    getControlType(id): Observable<any>{
          return this._http.get(this.url+'/'+id);
    }
}
