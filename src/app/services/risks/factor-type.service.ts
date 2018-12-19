import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from '../global';
import { risksfactortype } from '../../models/index_risks';

@Injectable({
  providedIn: 'root'
})
export class FactorTypeService {

      private url_service: string;
      public url: string;
      constructor(
        public _http: HttpClient
      ){
        this.url = GLOBAL.url+"risks/factortype";
      }

      getFactorTypes(): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.get<any>(this.url, {headers: headers});

      }

      getFactorType(id): Observable<any>{
            return this._http.get(this.url+'/'+id);
      }
}
