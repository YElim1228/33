// server.js

const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    socket.emit('news', { hello: 'world' });
    socket.on('other event', (data) => {
        console.log(data);
    });
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});