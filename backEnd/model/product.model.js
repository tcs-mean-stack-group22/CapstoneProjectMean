let mongoose = require('mongoose');
mongoose.Promise = global.Promise;

let productSchema = new mongoose.Schema({
	name: String,
	price: Number,
	quantity: Number,
	discount: Number
});

const ProductModel = mongoose.model('Product', productSchema);

module.exports = ProductModel;
