import io from 'socket.io-client';

const socket = io('http://192.168.31.32:5000'); // Replace with your server URL

export default socket;
