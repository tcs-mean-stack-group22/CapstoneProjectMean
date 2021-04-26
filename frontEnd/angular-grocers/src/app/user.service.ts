import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

  





}
