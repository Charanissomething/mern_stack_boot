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
            username: "sai charan",
        };
        var data = {
            yearOfGraduation: 2050,
        }
        var result = await usermodel.updateOne(query, data);
        callback(null, result);
    } catch (err) {
        callback(err, null);
    }
}
module.exports.getSingleUser = async function(filterQuery, callBack) {
    try {
        var user = await userModel.findOne(filterQuery);
        if (!user)
            callBack("User not found", null);
        else
            callBack(null, user);
    } catch (err) {
        callBack(err, null);
    }
}
module.exports.deleteSingleUser = async function(filterQuery, callBack) {
    try {
        let user = await userModel.findOne(filterQuery);

        if (!user) {
            callBack("No user exist with query", null);
            return;
        }

        let modifiedUser = await userModel.findOneAndUpdate(filterQuery, { isDeleted: true }, { new: true });
        callBack(null, modifiedUser);
    } catch (err) {
        callBack(err, null);
    }
};
module.exports.createAUser = async function(user, callBack) {
    try {
        let isUserExist = await userModel.findOne(user);

        if (isUserExist) {
            callBack(`User with username ${user.username} Already exist `, null);
        } else {
            var newUser = new userModel(user);
            var result = await newUser.save();

            callBack(null, result);
        }
    } catch (err) {
        callBack("Error: " + err, null);
    }
}