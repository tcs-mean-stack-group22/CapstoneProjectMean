const UserModel = require("../model/user.model.js");
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
         lock: false,
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
  //this used in login site 
    let retrieveDataFromUser = (req, res) => {
        let userN =  req.body.username
        let pass =  req.body.password
       
        userModel.findOne(  {$and: [ {username: userN },{ password: pass} ]  }  ,(err,result) =>{
      
            if(result != null)
            {
                    return res.status(200).json({
                        
                        firstname : result.firstname ,
                        lastname : result.lastname ,
                        password : result.password ,
                        amountDeposit : result.amountDeposit ,
                        type : result.type ,
                        userId : result._id 
                        
                    });
   
            }
            else {
                return res.status(404).json({
                    error: err,
                    message: 'User not found'
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

let updateOnLockuserAccount = (req, res) =>
{
    let userName = req.body.username ;
    
    userModel.updateOne(   {username: userName }   ,{$set:{lock:true}} , (err,result) =>{
        if(!err)
        {
            res.send("User account is Lock now.")

        }
        else {
            res.send("Error generated By " + err);
        }
    })
}

let updateUserAmountByAccNum = (req, res) => {
	let amountDeposit= req.body.amountDeposit;
	let accountNumber = req.body.accountNumber;
	userModel.updateOne({accountnumber:accountNumber}, {$set:{amountDeposit:amountDeposit}}, (err, result) => {
		if (!err) {
			if (result.nModified > 0) {
				return res.status(200).json({
					message: 'Record updated successfully'
				});
			} else {
				return res.status(500).json({
					error: err,
					message: 'Amount not updated'
				});
			}
		}
	});
};


let findUsersByFirstAndLastNames = (req, res) => {
    let firstName =  req.params.firstname
    let lastName =  req.params.lastname
   console.log(firstName)
    userModel.find(  {$or: [ {firstname: firstName },{ lastname: lastName} ]  }  ,(err,data) =>{
        if(!err)
        {
            console.log(data.length)
            res.json(data );
        }
        else
        {
            res.send("The list of employee is empty" , err)
        }  
    })
    

}

let updateUserInfoById = (req, res) => {
    let _id = req.body._id; 
    let username = req.body.username;
    let address = req.body.address;
    let password = req.body.password;
    let phoneNum = req.body.phoneNum;
    let email = req.body.email; 
    console.log("Id is " + _id)

	
	userModel.updateOne({_id:_id}, {$set:{username:username, address:address, password:password, phoneNum:phoneNum, email:email}}, (err, result) => {
		if (!err) {
			if (result.nModified > 0) {
				return res.status(200).json({
					message: 'User Info updated successfully'
				});
			} else {
				return res.status(500).json({
					error: err,
					message: 'User Info not updated'
				});
			}
		}
	});
};





//on delete we use param
let deleteProductById = (req,res) => {
    let pid = req.params.pid;
    console.log(pid)
    userModel.deleteOne({_id : pid}, (err, result)=> {
        if(!err)
        {
            if(result.deletedCount > 0 )
            {
                res.send("Record deleted successfully.");
            }
              
            else
              {  res.send("record was not present."  ) ; 
            }
        }
        else
        {
            res.send("Error genereated: " + err);
    
        }
    });
    
    
    }
    


module.exports = {createUser , retrieveDataFromUser , storePass, retrieveAllLockedUserData , updateUnlockUser , updateOnLockuserAccount, updateUserAmountByAccNum , updateUserInfoById ,findUsersByFirstAndLastNames , deleteProductById} 
