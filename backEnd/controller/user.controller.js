let userModel = require("../model/user.model.js");

let createUser = (req,res) => {
    productQ = new userModel({
         //Variables must match the schema in module 
         firstname: req.body.firstName,
         lastname: req.body.lastname ,
         email: req.body.email,
         dob: req.body.dob , 
         phoneNum: req.body.phoneNum,
         address: req.body.address,
         type: req.body.type,
         lock: req.body.lock,
         accountnumber: req.body.accountnumber,
         amountDeposit: req.body.amountDeposit
  

    })
    productQ.save((err,result) => {
        if (!err)
        {
            res.send("Information has been saved, please log in now.");
        }
        else
        {
            res.send("Information failed to Save, Please Try again.." , err)
        }
    });
}
module.exports = {createUser}