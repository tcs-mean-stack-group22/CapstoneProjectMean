/* 
    //To return only 1 object 
    res.json(data[0])
    //to return array
    // res.json(data);
    res.json({"msg":"record Stored succesfulle"})
*/

let ProductRequestModel = require("../model/productRequest.model.js");

let createRequestForm = (req,res) => {
    productQ = new ProductRequestModel({
         //Variables must match the schema in module 
         pname: req.body.pname,
         quanity: req.body.quanity
    })
    productQ.save((err,result) => {
        if (!err)
        {
            res.send("Request was send to admin to confirm.");
        }
        else
        {
            res.send("Request failed to send to admin, Please Try again..")
        }
    });
}
let getAllFormsRequests =(req,res)=> {

    ProductRequestModel.find({},(err,result)=> {
        if(!err){
            res.json(result);
        }
        else{
            res.write("eror" , err)
        }
    })

}


//delete a formRequest 
let removeFormReqByName = (req, res) => {
    let pname = req.params.pid;

    ProductRequestModel.deleteOne({pname : pname}, (err, result) => {
        if(!err)
        {
            if(result.deletedCount > 0 )
            {
                res.send("Record Belonging to: " + pname + "deleted successfully");
            }

            else
              {  res.send("record was not present" + pname ) ; 
            }
        }
        else
        {
            res.send("Error genereated: " + err);

        }
    })

}



module.exports = {createRequestForm, getAllFormsRequests, removeFormReqByName};
