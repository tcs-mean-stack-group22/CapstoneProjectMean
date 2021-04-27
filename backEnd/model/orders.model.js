let  mongoose = require("mongoose");
mongoose.Promise = global.Promise; 

let OrderSchema = new mongoose.Schema({
    
    date_Ordered:String, 
    date_Delivered:String,
    type:Number,
    number_Items:Number,
    user_id:Number
})

let OrderModel= mongoose.model('Order', OrderSchema)

module.exports = OrderModel;

