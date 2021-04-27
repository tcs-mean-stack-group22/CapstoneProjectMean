let express = require("express");
let router = express.Router();  //router reference. 
let {getTicketDetails, postTicketDetails} = require("../controller/ticket.controller");


console.log("Made it to Router")
router.get("/allTicketDetails",getTicketDetails);
router.post("/addTicket", postTicketDetails)

module.exports=router;
