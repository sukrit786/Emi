var express = require('express');
var app = express();
app.get('/game',(req,res)=>{
    res.sendFile(__dirname+'/service.html');
})
app.use('/emi',express.static('../client'));
app.listen(3030)
// scrollspy