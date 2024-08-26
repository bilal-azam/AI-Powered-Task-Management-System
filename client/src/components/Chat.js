import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:5000');

const Chat = () => {
    const [message, setMessage] = useState('');
    const [chat, setChat] = useState([]);

    const sendMessage = () => {
        socket.emit('sendMessage', message);
        setMessage('');
    };

    useEffect(() => {
        socket.on('receiveMessage', (message) => {
            setChat([...chat, message]);
        });
    }, [chat]);

    return (
        <div>
            <div>
                {chat.map((msg, index) => (
                    <div key={index}>{msg}</div>
                ))}
            </div>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message"
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default Chat;