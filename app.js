const express = require('express');
const app = express();                                                                                                      
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const userRoute = require('./route/user');


mongoose.connect('mongodb+srv://Admin123:Admin123@cluster0.wqrjm.mongodb.net/JWT?retryWrites=true&w=majority', {useNewUrlParser: true}, (err) => {
if (!err) {console.log('MongoDB Connection Succeeded.') }
else {console.log('Error in DB connection:' + err) }           
});
                                                       
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/user',userRoute)

module.exports = app;
