let express = require("express");
let router = express.Router();  //router reference. 
let {getOrderDetails, postOrderDetails} = require("../controller/orders.controller.js");


console.log("Made it to Router")

router.get("/allOrderDetails",getOrderDetails);
router.post("/addOrder", postOrderDetails)

module.exports=router;