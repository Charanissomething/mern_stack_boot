const mongoose = require("mongoose");
const userschema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    yearOfGraduation: { type: Number, min: 2000, max: 9000 },
    createdat: { type: Date, default: Date.now },
    isDeleted: { type: Boolean },
});
module.exports = mongoose.model("user", userschema);