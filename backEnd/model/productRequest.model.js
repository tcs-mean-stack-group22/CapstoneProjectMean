let mongoose = require("mongoose");
mongoose.Promise = global.Promise;      // creating reference. 

let ProductRequest = new mongoose.Schema({
    pname:String,
    quanity:Number
});


const ProductRequestModel = mongoose.model("",ProductRequest,"ProductRequest");

module.exports = ProductRequestModel;
