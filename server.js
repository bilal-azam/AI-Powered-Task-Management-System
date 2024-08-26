const express = require('express');
const http = require('http');
const { initSocket } = require('./services/chatService');

const app = express();
const server = http.createServer(app);
initSocket(server);

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});