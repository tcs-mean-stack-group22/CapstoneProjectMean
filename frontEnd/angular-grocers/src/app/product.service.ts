import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { RequestForm } from './ModulerequetForm';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
/* 
By defualt return type of all observable 
if the return type is string than we have to perform {responseType:'text'} 

--------------
if return type is json from express module
http.get ("url")
http.post ("url", jsonData)
http.delete ("url")
http.put ("url", jsonData)

if return type is non json format
http.get ("url" , {responseType:'text'})
http.post ("url", jsonData , {responseType:'text'})
http.delete ("url" , {responseType:'text'})
http.put ("url", jsonData , {responseType:'text'})
*/



export class ProductService {

  constructor(public http:HttpClient) { }



   //post method 1st parameter url and 2nd parameter json data
   sotreProductReqForm(productRef:any)
   {
    /*  this.http.post("http://localhost:9090/product/storeProductDetails", productRef  ).
     subscribe(result => console.log(result), error => console.log(error)); */
     return this.http.post("http://localhost:9090/product/requestForm", productRef ,{responseType:'text'} )

   }

  getProductReqForm() : Observable <RequestForm[]> 
  {
     
    return  this.http.get<RequestForm[]>("http://localhost:9090/product/retrieveReqForm");

    
  }

  removeReqForm(pname:any) {
    return this.http.delete("http://localhost:9090/product/removeform/" + pname,  {responseType:'text'} );
  }


}

