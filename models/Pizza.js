const mongoose = require("mongoose");
const {Schema, model} = mongoose;

const PizzaSchema = new Schema({
    name: {type:String, required:true},
    price: {type: String, required:true}
})

const Pizza = model("Pizza", PizzaSchema);
module.exports = Pizza;