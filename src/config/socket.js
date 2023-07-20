// socket.js
import io from 'socket.io-client';

let socketInstance = null;

export const createSocketConnection = () => {
    if (!socketInstance) {
        socketInstance = io.connect('http://192.168.31.32:5000');
    }
    return socketInstance;
};


