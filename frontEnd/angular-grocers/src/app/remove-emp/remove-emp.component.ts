import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-remove-emp',
  templateUrl: './remove-emp.component.html',
  styleUrls: ['./remove-emp.component.css']
})
export class RemoveEmpComponent implements OnInit {

  constructor(public userServ: UserService) { }

  ngOnInit(): void {
  }
  msg?:string = "";
  empArr:Array<any> = [];
  removeEmp(ref:any)
  {
    console.log(ref)
    this.userServ.searchForUser(ref).subscribe(result => { 
     
      this.empArr = result
    } , err=> this.msg = err)
  }
  onDelete(id:any)
  {
    console.log(id)
    this.userServ.deleteUser(id).subscribe(
       result => {
         this.msg = result ;
         location.reload();
      } , err => this.msg = err )
  }

}
