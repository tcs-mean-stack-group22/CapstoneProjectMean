let OrderModel = require("../model/orders.model.js");

exports.getOrderDetails =(req,res)=> {
    OrderModel.find({},(err,result)=> {
        if(!err){
            res.json(result);
        }
    })
}

exports.getOrderDetailsById = (req,res) => {
    let user_id = req.params.user_id;
	OrderModel.find({ user_id: user_id }, (err, data) => {
		if (!err) {
			return res.status(200).json(data);
		} else {
			return res.status(404).json({
				error: err,
				message: 'Order not found'
			});
		}
	});
}

exports.postOrderDetails = (req,res) =>{
    let order = new OrderModel({
        
        date_Ordered:req.body.date_Ordered,
        date_Delivered:req.body.date_Delivered,
        status:req.body.status,
        number_Items:req.body.number_Items,
        user_id:req.body.user_id
    })
    order.save((err, result)=>{
        if(!err){
            return res.status(200).json({
                message:"Order Added Successfully"
            })
        }else{
            return res.status(500).json({
                message: "Failed to add prodcut",
                error: err
            })
        }
    })
}

exports.updateStatusById = (req, res) => {
	let _id= req.body._id;
	let status= req.body.status;
	OrderModel.updateOne({_id:_id}, {$set:{status:status}}, (err, result) => {
		if (!err) {
			if (result.nModified > 0) {
				return res.status(200).json({
					message: 'Status updated successfully'
				});
			} else {
				return res.status(500).json({
					error: err,
					message: 'Status not updated'
				});
			}
		}
	});
};




