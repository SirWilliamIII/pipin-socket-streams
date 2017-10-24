const net = require('net')

const HOST = '0.0.0.0'
const PORT = 4000

net.createServer(socket => {

	console.log(`Connected to ${socket.remoteAddress}: ${socket.remotePort} `)

	socket.on('data', data => {

		console.log(`Data: ${socket.remoteAddress} ${data}`)
		
		socket.write(data)
	})

	socket.on('close', data => {
	
		console.log(`Closed: ${socket.remoteAddress}`) 

	})

}).listen(PORT, HOST)

console.log(`Server listening on port ${PORT}`)
