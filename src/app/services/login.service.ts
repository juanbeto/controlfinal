import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';
import { Router } from '@angular/router';
//import { User } from '../../models/index_admin';
import { user } from '../models/index_admin';


@Injectable()
export class LoginService {

  private url_service: string;
  public url: string;
  public _user: user;
  public status: string;
  public token: any;
  public identity: any;

  constructor(
    public _http: HttpClient,
    private router:Router
  ){
    this.url = GLOBAL.url+"Admin/user";
    this._user = new user(1, ' ', ' ', ' ');
  }

  ValidateUser(username:string, password:string){

    this._user.email      = username;
    this._user.password  = password;

    this.login(this._user).subscribe(
      response => {

              this.token = response;
              localStorage.setItem('token', this.token);
              this.login(this._user, true).subscribe(
                response => {
                        this.identity = response;
                        localStorage.setItem('user', JSON.stringify(this.identity));
                        this.router.navigateByUrl('/dashboard');
                },
                error => {
                  console.log(<any>error);
                }

              );
      },
      error => {
        console.log(<any>error);
      }

    );
    this.router.navigate(['/login']);
    /*
    if(username=='admin'&& password=='admin'){
    let user={
      role:'admin',
      id:'1aaa8c4f:7788:4485:ad2c_d319283d6b01'
        }
        localStorage.setItem('user',JSON.stringify(user));
        return true;
      }else {
          localStorage.removeItem('user');
          return false;
        }*/
  }


  login(user, gettoken = null){

    if(gettoken != null){
      user.gettoken = gettoken;
    }
    let json = JSON.stringify(user);
    let params = "json= "+json;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.post(this.url+'/login',params, {headers: headers});
  }
}
