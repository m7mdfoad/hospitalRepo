import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  login =false;

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.loginService.currentStatus$.subscribe(login=>{
      this.login=login;
    });
  }
  
  
  
  

}

