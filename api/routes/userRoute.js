var express = require('express');
var router = express.Router();
var userList = require("../controllers/userController.js");

router.get('/api/createuser', userList.createUser);

module.exports = router;