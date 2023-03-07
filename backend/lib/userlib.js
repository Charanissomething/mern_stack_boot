//const usermodel = require("../models/usermodel")
import usermodel from "../models/usermodel.js";

export async function getAllUsers(callback) {
    try {
        var users = await usermodel.find({});
        callback(null, users)
    } catch (err) {
        callback(err, null)
    }
}

export async function createFirstUser(callback) {
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

export async function updateUser(callback) {
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
export async function getSingleUser(filterQuery, callBack) {
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
export async function deleteSingleUser(filterQuery, callBack) {
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
// export async createAUser(user, callBack) {
//     try {
//         let isUserExist = await usermodel.findOne(user);

//         if (isUserExist) {
//             callBack(`User with username ${user.username} Already exist `, null);
//         } else {
//             var newUser = new usermodel(user);
//             var result = await newUser.save();

//             callBack(null, result);
//         }
//     } catch (err) {
//         callBack("Error: " + err, null);
//     }
// }