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
            username: "manga",
            yearOfGraduation: 2027,
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
            username: "saicharan",
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
        let user = await usermodel.findOne(filterQuery);

        if (!user) {
            callBack("No user exist with query", null);
            return;
        }

        let modifiedUser = await usermodel.findOneAndUpdate(filterQuery, { isDeleted: true }, { new: true });
        callBack(null, modifiedUser);
    } catch (err) {
        callBack(err, null);
    }
};
module.exports.createAUser = async function(user, callBack) {
    try {
        let isUserExist = await usermodel.findOne(user);

        if (isUserExist) {
            callBack(`User with username ${user.username} Already exist `, null);
        } else {
            var newUser = new usermodel(user);
            var result = await newUser.save();

            callBack(null, result);
        }
    } catch (err) {
        callBack("Error: " + err, null);
    }
}