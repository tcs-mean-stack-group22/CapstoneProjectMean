export class User {
    constructor(public _id:number,public firstname:String ,public lastname:String , public username:String ,public password:String ,
        public email:String , public dob:String  , public phoneNum:number ,public address:String ,public type:String ,public lock:boolean 
        ,public accountnumber:number , public amountDeposit:number   ) {}
}