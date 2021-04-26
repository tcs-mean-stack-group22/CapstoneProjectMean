let express = require("express");
let router = express.Router();  //router reference. 

let productRequest = require("../controller/productRequest.controller.js");



//If the path is /product/... than it will match to the subpath 

router.post("/requestForm", productRequest.createRequestForm);
router.get("/retrieveReqForm", productRequest.getAllFormsRequests);
router.delete("/removeform/:pid", productRequest.removeFormReqByName);
//router.post("/insert", productRequest.createRequestForm);

module.exports = router;