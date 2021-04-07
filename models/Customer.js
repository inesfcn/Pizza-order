const mongoose = require("mongoose");
const { Schema, model} = mongoose;

const CustomerSchema = new Schema({
    firstname: {type: String, required:true},
    lastname: {type: String, required:true},
    email:{type: String, required:true},
    password:{type: String, required:true},
    StreetNr : { type: String, required:true},
    city:{type:String, required: true},
    country: {type:String, default: "Germany"},
})

const Customer = model("Customer", CustomerSchema);

module.exports = Customer;
