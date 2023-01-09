import { Component } from '@angular/core';



 @Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

user= {
  name:'test',
  id:123456789,
  birthday:24/09/1990,
  gender: 'male',
  username:'hello',
  password:'world'

};

}
