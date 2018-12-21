import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl,Validators, FormGroup } from '@angular/forms';
import {AuthenticationService} from '../_services/authentication.service'
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  loginNameControl:FormControl
  loginPasswordControl:FormControl
  userId:Number
  token:string
  loginResponse:any
  isSubmitted:boolean = false


  constructor(private authService : AuthenticationService,private router: Router) { 
    console.log(this.userId)
  }

  ngOnInit() {
    console.log(this.userId)
    this.loginNameControl = new FormControl('',Validators.required);
    this.loginPasswordControl = new FormControl('',Validators.required);
    this.loginForm = new FormGroup({'loginNameControl':this.loginNameControl,'loginPasswordControl':this.loginPasswordControl})
  }

  onSubmit() {
    if(this.loginForm.valid){
      console.log("model-based form submitted");
      this.isSubmitted = true // to diable the login button oterwise if login takes time user can click multiple times
      let x = this.authService.login(this.loginNameControl.value,this.loginPasswordControl.value)
      x.subscribe(loginResponse => this.loginResponse = loginResponse  , 
                  err => { console.log(err)
                        this.isSubmitted = false
                        },
                    ()=>{ console.log('completed') 
                    localStorage.setItem('userId', this.loginResponse.user_id.toString())
                    localStorage.setItem('token', this.loginResponse.token.toString())
                    console.log(this.loginResponse)
                    this.router.navigate(['home'])
                  }) 

    }
    else{
      this.loginNameControl.markAsTouched({ onlySelf: true }) //marking them dirty to display error message
      this.loginPasswordControl.markAsTouched({ onlySelf: true })
    }
}

}
