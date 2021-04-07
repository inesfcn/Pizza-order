const Order = require("../models/Order");
const Pizza = require("../models/Pizza");
const Cutomer = require("../models/Customer")

exports.getOrders = async (req,res,next) =>{
    let ordersAll = await Order.find()
        .populate({path:"pizzas", select:"-_id, __v"})
        .populate({path:"userId", select:"adress.city -_id"})

    res.json(ordersAll)
}