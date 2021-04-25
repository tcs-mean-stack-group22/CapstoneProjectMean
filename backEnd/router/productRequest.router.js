let express = require("express");
let router = express.Router();  //router reference. 

let productRequest = require("../controller/productRequest.controller.js");



//If the path is /product/... than it will match to the subpath 

router.post("/productRequest", productRequest.createRequestForm);

module.exports = router;