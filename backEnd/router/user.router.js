let express = require("express");
let router = express.Router();  //router reference. 

let userControler = require("../controller/user.controller.js");



//If the path is /user/... than it will match to the subpath 

router.post("/signup", userControler.createUser);
router.post("/login", userControler.retrieveDataFromUser);
router.put("/editEmployee", userControler.storePass);
router.get("/lockUser", userControler.retrieveAllLockedUserData);

//router.post("/insert", productRequest.createRequestForm);
/* 
http://localhost:9090/user/login
http://localhost:9090/user/lockUser

*/
module.exports = router;