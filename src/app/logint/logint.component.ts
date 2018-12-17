import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../_services/authentication.service'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-logint',
  templateUrl: './logint.component.html',
  styleUrls: ['./logint.component.css']
})
export class LogintComponent implements OnInit {

  loginName:string
  loginPassword:string
  submitted:boolean = false

  constructor(private authService : AuthenticationService) { }

  ngOnInit() {

  }
  onSubmit(f:NgForm) {
    this.submitted = true;
    if(f.valid){
      console.log("model-based form submitted");
      var x =this.authService.login('Ramesh','Ramesh');
      console.log(x);
      console.log(this.loginName);
      console.log(f.controls.loginNameControl.errors);
      f.controls.loginNameControl.setValue('testing') ;
    }
    else{
      console.log('bye');
      f.controls.loginNameControl.markAsTouched({ onlySelf: true })
      f.controls.loginPasswordControl.markAsTouched({ onlySelf: true })
      return ;
    }

    }
}

