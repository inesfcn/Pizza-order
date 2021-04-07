const Pizza = require("../models/Pizza");

exports.getPizzas = async (req,res,next) =>{
    try{
        const pizzas = await Pizza.find();
        res.send(pizzas)
    }
    catch(err){
        next(err)
    }
}