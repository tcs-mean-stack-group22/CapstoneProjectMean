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
         pid: req.body.pid,
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

module.exports = {createRequestForm};