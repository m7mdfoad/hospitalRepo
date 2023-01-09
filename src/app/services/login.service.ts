import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
 private loginStatus = new BehaviorSubject(false); 
 currentStatus$: Observable<boolean> = this.loginStatus.asObservable();
  constructor() { }

  toggleLogin(){
    
    this.loginStatus.next(!this.loginStatus.value)

  } 
  
}
