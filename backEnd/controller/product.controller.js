const ProductModel = require('../model/product.model');

exports.addProduct = (req, res) => {
	let product = new ProductModel({
		name: req.body.name,
		price: req.body.price,
		quantity: req.body.quantity,
		discount: req.body.discount
	});

	product.save((err, result) => {
		if (!err) {
			return res.status(200).json({
				message: 'Product successfully Added'
			});
		} else {
			return res.status(500).json({
				message: 'Failed to add Product'
			});
		}
	});
};

exports.getAllProducts = (req, res) => {
	ProductModel.find({}, (err, result) => {
		if (!err) {
			return res.status(200).json(result);
		} else {
			return res.status(404).json({
				error: err,
				message: 'Products not found'
			});
		}
	});
};

exports.updateProduct = (req, res) => {
	let id = req.body.id;
	let updatedPrice = req.body.price;
	let updatedQty = req.body.quantity;
	let updatedDiscount = req.body.discount;

	ProductModel.updateOne({ _id: id }, { price: updatedPrice, quantity: updatedQty, discount: updatedDiscount }, (err, result) => {
		if (!err) {
			if (result.nModified > 0) {
				return res.status(200).json({
					message: 'Record updated successfully'
				});
			} else {
				return res.status(500).json({
					error: err,
					message: 'Record not updated'
				});
			}
		}
	});
};

exports.getProductById = (req, res) => {
	let id = req.params.id;

	ProductModel.find({ _id: id }, (err, data) => {
		if (!err) {
			return res.status(200).json(data);
		} else {
			return res.status(404).json({
				error: err,
				message: 'Product not found'
			});
		}
	});
};

exports.deleteProductById = (req, res) => {
	let id = req.params.id;

	ProductModel.deleteOne({ _id: id }, (err, result) => {
		if (!err) {
			if (result.deletedCount > 0) {
				return res.status(200).json({
					message: 'Record Deleted successfully'
				});
			} else {
				return res.status(404).json({
					error: err,
					message: 'Record not found'
				});
			}
		}
	});
};
