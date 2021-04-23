/* 
one router used for multiple operations(CRUD)   
export the Product to app.js so app.js can use it for direction to here after vertifing the
    path /product  than it will guild the flow here
 
1. import express
2.check what is the subpath and perform nessasasry operation by importing it from controller 
    product operation will return a json  

let express = require("express");
let router = express.Router();  //router reference. 
let ProductController = require("../controller/grocer.controller.js");
*/