let express = require("express");
let router = express.Router();  //router reference. 

let userControler = require("../controller/user.controller.js");



//If the path is /user/... than it will match to the subpath 

router.post("/signup", userControler.createUser);

//router.post("/insert", productRequest.createRequestForm);

module.exports = router;