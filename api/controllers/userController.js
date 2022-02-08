var mongoose = require('mongoose');
var User = require('../models/userModel');

exports.createUser = function(req, res) {
    console.log(req.body);
    res.send("Hello");
    // Hotel.find(function(err, hotels) {
    //     if (err) {
    //         res.send(err);
    //     }
    //     res.json(hotels);
    // });
    // console.log(req.body);
}