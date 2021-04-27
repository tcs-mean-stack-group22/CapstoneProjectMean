const UserModel = require("../model/user.model.js");
let userModel = require("../model/user.model.js");
let cnt = 0 ;

let createUser = (req,res) => {
   let cnt2 = cnt++ ;
   cnt2 = cnt2 + Math.floor(Math.random() * 10000)     
    productQ = new userModel({
         //Variables must match the schema in module 

         _id :  cnt2,
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


let retrieveAllLockedUserData = (err, res) => {

   // console.log(Math.floor(Math.random() * 100))
     userModel.find( {  lock:true }, (err,data) =>{
        if(!err)
        {
            res.json(data );
        }
        else
        {
            res.send("The list is empty" , err)
        }
    }) 
 
}


let updateUnlockUser = (req , res) => {
    let userName = req.body.userName ;
    let usrId = req.body.userId ;
    console.log(userName)
    console.log(usrId)
    userModel.updateOne( {$or : [ {_id:usrId} , {username : userName}    ] }  ,{$set:{lock:false}},(err,result)=> {
        if(!err){
            if(result.nModified > 0){
                    res.send("User account is unblock now.")
            }else {
                    res.send("User Status did not get updated.");
            }
        }else {
            res.send("Error generated "+err);
        }
    })
}





module.exports = {createUser , retrieveDataFromUser , storePass, retrieveAllLockedUserData , updateUnlockUser } 