import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: any;
  password: any;
  
  
  constructor(private loginService:LoginService){}
  
  
  changestatus(){
    this.loginService.toggleLogin();
  }

}