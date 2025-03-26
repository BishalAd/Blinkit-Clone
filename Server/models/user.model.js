import mongoose from "mongoose";

const userSchema = new mongoose.Schema({  // Fixed moongoose to mongoose
    name: {
        type: String,
        required: [true, "Provide Name"]
    },
    email: {
        type: String,
        required: [true, "Provide Email"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Provide Password"]
    },
    avatar: {
        type: String,
        default: ""
    },
    mobile: {
        type: Number,
        default: null
    },
    refresh_token: {
        type: String,
        default: ""
    },
    verify_email: {
        type: Boolean,
        default: false
    },
    last_login_date: {
        type: Date,
        default: null  // Fixed: Changed "" to null
    },
    status: {
        type: String,
        enum: ["Active", "Inactive", "Suspended"],
        default: "Active"
    },
    address_details: [
        {
            type: mongoose.Schema.ObjectId,
            ref: "address"
        }
    ],
    shopping_cart: [
        {
            type: mongoose.Schema.ObjectId,
            ref: "cartProduct"
        }
    ],
    orderHistory: [
        {
            type: mongoose.Schema.ObjectId,
            ref: "order"
        }
    ],
    forgot_password_otp: {
        type: String,
        default: null
    },
    forget_password_expiry: {
        type: Date,
        default: null  // Fixed: Changed "" to null
    },
    role: {
        type: String,
        enum: ["ADMIN", "USER"],  // Fixed: Changed "USERS" to "USER"
        default: "USER"
    }
}, {
    timestamps: true
});

const UserModel = mongoose.model("User", userSchema);  // Capitalized "User" as a common convention

export default UserModel;
