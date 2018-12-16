import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login(loginName:string,loginPassowrd:string)
  {
    if (loginName === 'Ramesh' && loginPassowrd ==='Ramesh') {
      // return new User({id=1,name='Ramesh',email='test@email.com'})
      return Object.assign(new User(),{id:1,name:'Ramesh',email:'test@email.com'})
    } else {
      return Object.assign(new User(),{id:0,name:'Invalid',email:'Invalid'})
      
    }
  }
}
