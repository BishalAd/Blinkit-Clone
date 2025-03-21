import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId : {
        type : mongoose.Schema.ObjectId,
        ref : "user"
    },
    orderId : {
        type : String,
        require : [true, "Provide OrderId"],
        unique : true
    },
    productId : {
        type : mongoose.Schema.ObjectId,
        ref : "product"
    },
    product_details : {
        name : String,
        image : Array

    },
    paymentId : {
        type : String,
        default : ""
    },
    paymentStatus : {
        type : String,
        default : ""
    },
    deliveryAddress : {
        type : mongoose.Schema.ObjectId,
        ref : "address"
    },
    subTotalAmount
})