let express = require('express');
let router = express.Router(); //router reference.
let { getOrderDetails, postOrderDetails } = require('../controller/orders.controller');

router.get('/allOrderDetails', getOrderDetails);
router.post('/addOrder', postOrderDetails);

module.exports = router;
