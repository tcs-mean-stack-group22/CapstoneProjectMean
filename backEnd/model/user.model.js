let  mongoose = require("mongoose");
mongoose.Promise = global.Promise; 

let UserSchema = new mongoose.Schema({
    firstname:String, 
    lastname:String, 
    email:String, 
    dob:Date, 
    phoneNum:Number,
    address:String,
    type:String,                //User Account type. (Admin/User/Employee)
    lock:Boolean, 
    accountnumber:Number,
    amountDeposit:Number
})


const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;