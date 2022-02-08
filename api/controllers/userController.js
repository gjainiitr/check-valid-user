var mongoose = require('mongoose');
var User = require('../models/userModel');

exports.createUser = async function(req, res) {
    // var x = await User.findOne({});
    // console.log(x);
    const currUser = new User(req.query);
    const isFound = await User.find({
        $or: [
            { email: currUser.email },
            { username: currUser.username },
            {phoneno: currUser.phoneno}
        ]
    });
    if (isFound.length > 0) {
        res.send('user already exists');
        return;
    }
    await currUser.save();
    res.send("registration successful");
}