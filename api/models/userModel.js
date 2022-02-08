var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({ // Modify and update schema as needed
    username: { type: String, required: true, unique: true },
    fullname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneno: { type: String, required: true, unique: true },
    age: { type: Number, required: true },
    gender: {type: String, required: true},
    address: {type: String, required: true},
    password: {type: String, required: true}
})
module.exports = mongoose.model('User', userSchema);