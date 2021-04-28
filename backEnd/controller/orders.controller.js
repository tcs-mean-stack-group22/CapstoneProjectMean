let OrderModel = require("../model/orders.model.js");

exports.getOrderDetails =(req,res)=> {
    OrderModel.find({},(err,result)=> {
        if(!err){
            res.json(result);
        }
    })
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




