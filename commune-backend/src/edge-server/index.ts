import { Server, Socket } from "socket.io";
import { Server as HttpServer } from "http";

let io: Server;

export function socketServer(server: HttpServer) {
  io = new Server(server, {
    cors: {
      origin: "http://localhost:3000",
    },
  });

  io.on("connection", (socket: Socket) => {
    console.log("User connected:", socket.id);

    // join room
    socket.on("joinRoom", (roomId: string) => {
      socket.join(`room-${roomId}`);
      console.log(`Joined room room-${roomId}`);
    });

    // notify users upon disconnection
    socket.on("disconnect", () => {
      socket.broadcast.emit("user disconnected", socket.id);
    });
  });
}

export function sendMessageToSocket(message: any) {
  if (io) {
    io.to(`room-${message.channelId}`).emit("msg_rcvd", message);
  } else {
    console.error("Socket.IO server is not initialized");
  }
}
