import { Server, Socket } from 'socket.io';
import { Server as HttpServer } from 'http';

let io: Server;

export function socketServer(server: HttpServer) {
  io = new Server(server);

  io.on('connection', (socket: Socket) => {
    console.log('User connected:', socket.id);

    socket.on('disconnect', () => {
      console.log('User disconnected:', socket.id);
    });

  });
}


export function sendMessageToSocket(recipient: string, message: any) {
  if (io) {
    io.to(recipient).emit('message', message);
  } else {
    console.error('Socket.IO server is not initialized');
  }
}
