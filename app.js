const express = require("express");
const app = express();
var _http = require('http');
var http = require('http').Server(app);
var io = require('socket.io')(http);
const exec = require('child_process').exec;
const cmd = require('node-cmd');
 
app.use(express.static('src'));
  
http.listen(3000, function () {
    console.log('Check out the petstore at http://localhost:3000');
});
 
var addresses = [];
var command = '';
io.on('connection', function (socket) {
    command = 'snak call Adoption getAdopters'
	exec(command,function(err,stdout,stderr){
		if(!err){

			var array = [];
			array = JSON.parse(stdout);
			for (var i = 0; i < array.length; i++ )
			{
				if (array[i].toString() == '8B05651240631E5724CC380D7D249C1FC63F320B')
				{
					addresses.push(i);
				}
			}
			console.log(stdout);		
		}

		else{
			console.log(stderr);
		}
	});
    io.emit('adopted', addresses);
 
    socket.on('adopt', function (msg) {
    	command = 'snak call Adoption adopt '+ msg.toString();
    	console.log(command);
    	exec(command, async function(err,stdout,stderr){
    		if(err){
    			console.log(stderr);
    		}
    		else
    		{
				command = 'snak call Adoption getAdopters'
				exec(command,function(err,stdout,stderr){
					if(!err){

						var array = [];
						array = JSON.parse(stdout);
						for (var i = 0; i < array.length; i++ )
						{
							if (array[i].toString() == '8B05651240631E5724CC380D7D249C1FC63F320B')
							{
								addresses.push(i);
							}
						}
						console.log(stdout);
						io.emit('adopted', addresses);
	
					}

					else{
						console.log(stderr);
					}
				});	    			
    		}
			
		});
    });
});


io.on('disconnect', function(socket) {
	console.log('socket disconeceted');
})
