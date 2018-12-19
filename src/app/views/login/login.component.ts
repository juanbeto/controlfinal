import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent { 

  constructor(private router:Router, private loginService:LoginService){}
    private username;
    private password;
  
    ValidateUser(){
      if(this.loginService.ValidateUser(this.username, this.password)){
        this.router.navigateByUrl('/dashboard')
      }
      else{
        this.router.navigate(['/login']);
      }
    
    }
}
