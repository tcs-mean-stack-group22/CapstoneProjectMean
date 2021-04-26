import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './model.user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http:HttpClient) { }


  ipAddress:String = "http://localhost:9090/user/signup";
  //Store user information 
  storeUserInfo(info:any)
  {

    return this.http.post("http://localhost:9090/user/signup" , info , {responseType:'text'} )
  }

  loginVertify(ref:any) 
  {
    return this.http.post("http://localhost:9090/user/login" , ref )
  }

  



}
