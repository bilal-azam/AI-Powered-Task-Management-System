const socketIO = require('socket.io');

const initSocket = (server) => {
    const io = socketIO(server);

    io.on('connection', (socket) => {
        console.log('New client connected');
        
        socket.on('message', (msg) => {
            io.emit('message', msg);
        });

        socket.on('disconnect', () => {
            console.log('Client disconnected');
        });
    });
};

module.exports = { initSocket };