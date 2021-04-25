let mongoose = require("mongoose");
mongoose.Promise = global.Promise;      // creating reference. 

let ProductRequest = mongoose.Schema({
    pname:String,
    quanity:Number
});


let ProductRequestModel = mongoose.model("",ProductRequest,"ProductRequest");

module.exports = ProductRequestModel;
