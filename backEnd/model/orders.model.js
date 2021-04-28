let  mongoose = require("mongoose");
mongoose.Promise = global.Promise; 

let OrderSchema = new mongoose.Schema({
    
    date_Ordered:Date, 
    date_Delivered:Date,
    status:Number,              // 0-for in house, 1 - en route, 2 Delivered to house
    number_Items:Number,
    user_id:String
})

let OrderModel= mongoose.model('Order', OrderSchema)

module.exports = OrderModel;

