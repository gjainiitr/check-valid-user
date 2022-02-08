var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({ // Modify and update schema as needed
    fullname: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    phoneno: { type: String, required: true, unique: true },
    age: { type: Number, required: true },
    gender: {type: String, required: true},
    address: {type: String, required: true},
    password: {type: String, required: true}
}, {
    collection: "Users"
})
module.exports = mongoose.model('User', userSchema);