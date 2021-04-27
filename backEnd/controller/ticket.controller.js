let TicketModel = require("../model/ticket.model.js");

exports.getTicketDetails =(req,res)=> {
    TicketModel.find({},(err,result)=> {
        if(!err){
            res.json(result);
        }
    })
}


exports.postTicketDetails = (req,res) =>{
    let ticket = new TicketModel({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        msg:req.body.msg
    })
    ticket.save((err, result)=>{
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

