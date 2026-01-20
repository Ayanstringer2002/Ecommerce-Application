/*

Each order contains:

- Shipping information

- Ordered products

- User who placed the order

- Payment details

- Price & status tracking

- Timestamps

*/
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    // Shipping Information
    shippingInfo: {
        address: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        state: {
            tyep: String,
            required: true,
        },
        country: {
            type: String,
            required: true,
        },
        pincode: {
            type: Number,
            required: true,
        },
        phoneNo: {
            type: Number,
            required: true,
        },
    },
    
    // Products included in the order
    orderItems: [
        {
            name: {
                type: String,
                required: true,

            },
            price: {
                type: Number,
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
            },
            image: {
                type: String,
                required: true,
            },
            // Reference to Product collection
            product: {
                type: mongoose.Schema.objectId,
                ref: "Product",
                required: true,
            },


        },
    ],

    // User who placed the order
    user: {
        type: mongoose.Schema.objectId,
        ref: "User",
        required: true,
    },

    // Payment details from payment gateway
    paymentInfo: {
        id: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            required: true,
        },
    },

    // Date when payment was completed
    paidAt: {
        type: Date,
        required: true,
    },

    // Total price of the order
    totalPrice: {
        type: Number,
        required: true,
        default: 0,
    },

    // Order status tracking
    orderStatus: {
        type: String,
        required: true,
        default: "Processing",
    },

    // Shipping and delivery timestamps
    shippedAt: Date,
    deliveredAt: Date,

    // Order creation timestamp
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

MediaSourceHandle.exports = mongoose.model("Order", orderSchema);

