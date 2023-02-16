const usermodel = require("../models/usermodel")

module.exports.getAllUsers = async function(callback) {
    try {
        var users = await usermodel.find({});
        callback(null, users)
    } catch (err) {
        callback(err, null)
    }
}

module.exports.createFirstUser = async function(callback) {
    try {
        var user = {
            username: "sai",
            yearOfGraduation: 2023,
        };
        var newUser = new usermodel(user);
        var result = await newUser.save();
        callback(null, result)
    } catch (err) {
        callback(err, null)
    }
}

module.exports.updateUser = async function(callback) {
    try {
        var query = {
            username: "sai",
        };
        var data = {
            yearOfGraduation: 2090,
        }
        var result = await usermodel.updateOne(query, data);
        callback(null, result);
    } catch (err) {
        callback(err, null);
    }
}

module.exports.deleteUser = async function(username, callback) {
    try {
        var query = {
            username: username,
        };
        var result = await usermodel.deleteOne(query, data);
        callback(null, result);
    } catch (err) {
        callback(err, null);
    }
}
module.exports.getUserByName = async function(filter, callback) {
    try {
        var user = await usermodel.find(filter);
        callback(err, user);
    } catch (err) {
        callback(err, null);
    }
}