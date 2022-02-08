const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

const routes = require('./api/routes/userRoute');

const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/UserBase';
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.once("open", () => console.log("Database Connected"))
db.on("error", error => {
    console.log("Your error", error);
})


app.use(routes);

app.listen(port); 
console.log("RESTful API server started on port: " + port);
