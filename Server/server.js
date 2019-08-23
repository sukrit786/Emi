const express = require('express');
require('dotenv').config();
const bodyparser = require('body-parser');

var app = express();
app.use('/emi',express.static('../Client'));
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

app.listen(process.env.PORT,()=>console.log('emicon server is live : '+process.env.PORT));

