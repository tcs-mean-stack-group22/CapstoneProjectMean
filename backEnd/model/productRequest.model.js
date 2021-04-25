let mongoose = require("mongoose");
mongoose.Promise = global.Promise;      // creating reference. 

let ProductRequest = mongoose.Schema({
    pid:Number,
    quanity:Number
})

let ProductRequestModel = mongoose.model("",ProductRequest,"ProductRequest");

module.exports = ProductRequestModel