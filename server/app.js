const path = require('path'),
    fs = require('fs'),
    http = require('http'),
    express = require('express'),
    socketIO = require('socket.io')

const publicPath = path.join(__dirname, './../client/index.html')
    app = express(),
    server = http.createServer(app),
    io = socketIO(server)