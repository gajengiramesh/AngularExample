import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from '../_models/user';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  service_url:string

  constructor(private http: HttpClient) { 
    this.service_url = environment.service_url
  }
  login(loginName:string,loginPassowrd:string) :Observable<any>
  {
    let url:string = `${this.service_url}auth/login/`
     
    console.log(url)
    let output:Observable<Object> = this.http.post(url,{'user_name':loginName,'password':loginPassowrd})
    return output.pipe(map(res => res))
    // output.subscribe(val => { this.tt = val as Response
    //                         },err => {console.log('error')
    //                         console.log(err)},()=>{
    //                           console.log('completed')
    //                           console.log(this.tt)
    //                           return this.tt
    //                         })
  }
  login1(loginName:string,loginPassowrd:string)
  {
    let url:string = `${this.service_url}auth/login/${loginName}/${loginPassowrd}`
    console.log(url)
    let output:Observable<Object> = this.http.get(url)
    output.subscribe(val => console.log(val))
    console.log(output)
    if (loginName === 'Ramesh' && loginPassowrd ==='Ramesh') {
      // return new User({id=1,name='Ramesh',email='test@email.com'})
      return Object.assign(new User(),{id:1,name:'Ramesh',email:'test@email.com'})
    } else {
      return Object.assign(new User(),{id:0,name:'Invalid',email:'Invalid'})
      
    }
  }
}
