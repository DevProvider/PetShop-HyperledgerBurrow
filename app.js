const express = require("express");
const app = express();
var _http = require('http');
var http = require('http').Server(app);
var io = require('socket.io')(http);
 
app.use(express.static('src'));
  
http.listen(3000, function () {
    console.log('Check out the petstore at http://localhost:3000');
});
 
var addresses = [0];

io.on('connection', function (socket) {
    
    io.emit('adopt', addresses);

    socket.on('adopt', function (msg) {
        addresses.push(msg);
        io.emit('adopt', addresses);
        console.log(addresses);
    });
});