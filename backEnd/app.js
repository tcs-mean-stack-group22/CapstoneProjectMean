//This is our main applican node app.js

//Load all required modules
let app = require('express')();
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let cors = require('cors');
//Database URL Details
let url = 'mongodb://localhost:27017/capStone';

//middleware enable data from post method.
app.use(bodyParser.urlencoded({ extended: true })); // enable body part data  for Post
app.use(bodyParser.json()); // json data.
app.use(cors()); //to enable communication policy between port 4040 and 4200

//Database connection without warning
const mongooseDbOption = {
	// to avoid warning
	useNewUrlParser: true,
	useUnifiedTopology: true
};
//ready to connect
mongoose.connect(url, mongooseDbOption);

//Connect the data
mongoose.connection;

//Flow routing starts from here :

//for increase  product amount by emp to adming -->  .../productRequest
let productRequest = require('./router/productRequest.router.js');
let productRoutes = require('./router/product.router.js');
let userRoutes = require('./router/user.router.js');
//than send the flow to product router.js if the link is :  http://localhost:9090/product/...

app.use('/product', productRoutes);
app.use('/productrequest', productRequest);
app.use('/user',userRoutes );

// Next

app.listen(9090, () => console.log('Server running on port number 9090'));

/*  List of links :  
http://localhost:9090/product/productRequest

http://localhost:9090/user/signup
http://localhost:9090/user/login

*/
