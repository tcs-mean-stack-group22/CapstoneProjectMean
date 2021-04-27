let  mongoose = require("mongoose");
mongoose.Promise = global.Promise; 

let TicketSchema = new mongoose.Schema({
    firstName:String,
    lastName:String,
    msg:String
})

let TicketModel= mongoose.model('Ticket', TicketSchema)

module.exports = TicketModel;
