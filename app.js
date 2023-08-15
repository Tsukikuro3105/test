var express = require('express');
var path = require('path');
var app = express();
var port = 3000;


app.use(express.static(path.join(__dirname,"/public/")));
app.get("/",(req,res) =>{

    res.send('hello wolrd');

})

app.listen(port, () =>{

    console.log("Listening on port ",port);
    
})