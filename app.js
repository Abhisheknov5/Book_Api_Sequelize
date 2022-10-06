const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const booksRoute = require('./routes/books');
const userRoute = require('./routes/user')
const imageRoute = require('./routes/images');

app.use('/uploads',express.static('uploads'));

app.use("/books",booksRoute)
app.use("/user",userRoute);
app.use("/images",imageRoute);


module.exports = app;