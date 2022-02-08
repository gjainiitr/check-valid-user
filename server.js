const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

const routes = require('./api/routes/userRoute');
app.use(routes);


app.listen(port); 
console.log("RESTful API server started on port: " + port);
