const mongoose = require("mongoose");

const todoschema = new mongoose.Schema({
    todotask: { type: String, required: true, unique: true },
    createdat: {
        type: Date,
        default: Date.now
    },
    iscompleted: { type: Boolean, required: false, default: true },
    isdeleted: { type: Boolean, required: false, default: true }
});

module.exports = mongoose.model("todo", todoschema);