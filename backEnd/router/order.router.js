<<<<<<< HEAD
let express = require("express");
let router = express.Router();  //router reference. 
let {getOrderDetails, postOrderDetails} = require("../controller/orders.controller.js");
=======
let express = require('express');
let router = express.Router(); //router reference.
let { getOrderDetails, postOrderDetails } = require('../controller/orders.controller');
>>>>>>> avichel

router.get('/allOrderDetails', getOrderDetails);
router.post('/addOrder', postOrderDetails);

module.exports = router;
