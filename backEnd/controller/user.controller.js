let userModel = require("../model/user.model.js");

let createUser = (req,res) => {
    productQ = new userModel({
         //Variables must match the schema in module 
         firstname: req.body.firstName,
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
       
        userModel.find(  {$and: [ {username: userN },{ password: pass} ]  }  , (err,result) =>{
            if(!err)
            {
                //To return only 1 object 
                
                if(result.length > 0)
                {
                   
                   
                    return res.status(200).json({
                        username : result[0].firstname ,
                        lastname : result[0].lastname ,
                        type : result[0].type 

                    });
                }
                else
                {
                    return res.status(529).json({
                        error: err,
                        message: 'Invalid username password'
                    });
               
                }
               
                //to return array
               // res.json(data);
            }
            else {
                return res.status(404).json({
                    error: err,
                    message: 'Products not found'
                });
            }
        })
        

    }



module.exports = {createUser , retrieveDataFromUser }