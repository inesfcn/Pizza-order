const mongoose = require("mongoose");
const {Schema, model} = mongoose;

const OrderSchema = new Schema(
    {
        order_data: Date,
        pizzas: {
            type: Schema.Types.ObjectId,
            ref:"Pizza"
        },
        userId :{
            type: Schema.Types.ObjectId,
            ref: "Customer"
        }
    }

)

const Order = model("Order", OrderSchema);
module.exports = Order;
