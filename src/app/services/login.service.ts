import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  constructor() { }

  ValidateUser(username:string, password:string){
    if(username=='admin'&& password=='admin'){
    let user={
      role:'admin',
      id:'1aaa8c4f:7788:4485:ad2c_d319283d6b01'
    }
    localStorage.setItem('user',JSON.stringify(user));
    return true;
  }
else {
localStorage.removeItem('user');
return false;
}

  }
}
