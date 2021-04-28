let express = require("express");
let router = express.Router();  //router reference. 
let {getOrderDetails, postOrderDetails, getOrderDetailsById} = require("../controller/orders.controller.js");

router.get('/allOrderDetails', getOrderDetails);
router.get('/getOrderDetailsById/:user_id', getOrderDetailsById )
router.put('/addOrder', postOrderDetails);

module.exports = router;
