const server = require('net').createServer()

let counter = 0
let sockets = {}

const port = 8888


server.on('connection', socket => {
    console.log('Client has connected')

    socket.write('Welcome to the chat zone!')
 
    socket.on('data', data => {
        Object.entries(sockets).forEach(socket => {
            socket[1].write(`${socket.id}`)
            socket[1].write(data)
        })
    })
})

server.on('disconnect', () => {
    delete sockets[socket.id]
    console.log('Client disconnected')
})

server.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
