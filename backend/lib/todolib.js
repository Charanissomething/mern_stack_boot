const todomodel = require("../models/todomodel");

module.exports.createatodoUser = async function(taskname, callBack) {
    try {
        var todo = {
            todotask: taskname,
        };
        var newUser = new todomodel(todo);
        var result = await newUser.save();
        callBack(null, result);
    } catch (err) {
        console.error(err);
        callBack(err, null);
    }
}