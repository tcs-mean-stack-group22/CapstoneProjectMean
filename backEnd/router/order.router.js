let express = require("express");
let router = express.Router();  //router reference. 
let {getOrderDetails, postOrderDetails, getOrderDetailsById, updateStatusById} = require("../controller/orders.controller.js");

router.get('/allOrderDetails', getOrderDetails);
router.get('/getOrderDetailsById/:user_id', getOrderDetailsById )
router.put('/addOrder', postOrderDetails);
router.put('/updateStatus',updateStatusById);

module.exports = router;
