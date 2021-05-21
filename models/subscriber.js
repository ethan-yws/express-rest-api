const mongoose = require("mongoose");

const subscriberSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    subscribedChannel: {
        type: String,
        required: true,
    },
    subscribeDate: {
        type: Date,
        required: true,
        default: Date.now,
    },
});

// Exporting the subscriber schema
module.exports = mongoose.model("Subscriber", subscriberSchema);
