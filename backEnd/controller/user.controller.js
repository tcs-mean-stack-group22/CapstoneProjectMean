let userModel = require("../model/user.model.js");

let createUser = (req,res) => {
    productQ = new userModel({
         //Variables must match the schema in module 
         firstname: req.body.firstname,
         lastname: req.body.lastname ,
         username: req.body.username ,
         password: req.body.password ,
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


  //the function will take username & password from user and return json first last name and type
    let retrieveDataFromUser = (req, res) => {
        let userN =  req.body.username
        let pass =  req.body.password
       
        userModel.findOne(  {$and: [ {username: userN },{ password: pass} ]  }  , (err,result) =>{
            if(!err)
            {
                    return res.status(200).json({
                        firstname : result.firstname ,
                        lastname : result.lastname ,
                        password : result.password ,
                        type : result.type 
                        
                    });
   
            }
            else {
                return res.status(404).json({
                    error: err,
                    message: 'Products not found'
                });
            }
        })
        

    }



//Updating product 
let storePass= (req,res)=> {
    let passW = req.body.newPass;
    let userN = req.body.username;
    console.log(passW)
    console.log(userN)
    userModel.updateOne({username:userN},{$set:{password:passW}},(err,result)=> {
        if(!err){
            if(result.nModified > 0){
                    res.send("Password was updated succesfully")
            }else {
                    res.send("Username is not valid+");
            }
        }else {
            res.send("Error generated "+err);
        }
    })

}

   


module.exports = {createUser , retrieveDataFromUser , storePass}