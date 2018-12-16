import { Component, OnInit } from '@angular/core';
import { FormControl,Validators, FormGroup } from '@angular/forms';
import {AuthenticationService} from '../_services/authentication.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  loginNameControl:FormControl
  loginPasswordControl:FormControl



  constructor(private authService : AuthenticationService) { }

  ngOnInit() {
    this.loginNameControl = new FormControl('',Validators.required);
    this.loginPasswordControl = new FormControl('',Validators.required);
    this.loginForm = new FormGroup({'loginNameControl':this.loginNameControl,'loginPasswordControl':this.loginPasswordControl})
  }

  onSubmit() {
    if(this.loginForm.valid){
      console.log("model-based form submitted");
      var x =this.authService.login('Ramesh','Ramesh');
      console.log(x);
      console.log(this.loginNameControl.value);
      console.log(this.loginNameControl.errors);
      this.loginNameControl.setValue('testing') ;
    }
    else{
      console.log('bye');
      this.loginNameControl.markAsTouched({ onlySelf: true })
      this.loginPasswordControl.markAsTouched({ onlySelf: true })
      return ;
    }
}

}
