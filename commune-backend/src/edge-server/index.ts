import { Server, Socket } from "socket.io";
import { Server as HttpServer } from "http";

let io: Server;
let username: any;
let channelId: string;

export function socketServer(server: HttpServer) {
  io = new Server(server, {
    cors: {
      origin: "http://localhost:3000",
    },
  });

  // io.use((socket: any, next) => {
  //   username = socket.handshake.auth.username;
  //   if (!username) {
  //     return next(new Error("Invalid Username"));
  //   }
  //   socket.username = username;
  //   socket.join(username);
  //   next();
  // });

  io.on("connection", (socket: any) => {
    console.log("User connected:", socket.id);
    // console.log("Username", socket.handshake.auth.username);

    // join room
    socket.on("joinRoom", (roomId: string) => {
      // Leave all rooms starting with "room-"
      // Object.keys(socket.rooms).forEach((room) => {
      //   console.log(room);
      //   if (room.startsWith("room-")) {
      //     socket.leave(room);
      //   }
      // });

      const rooms = io.of("/").adapter.rooms
      console.log(rooms);

      for (let [id, socket] of io.of("/").sockets) {
       console.log(socket._cleanup);
      }

      // Join the new room
      socket.join(`room-${roomId}`);
      console.log(`Joined room room-${roomId}`);
    });

    //leave room
    socket.on("leaveRoom", (roomId: string) => {
      channelId = roomId;
      socket.leave(`room-${roomId}`);
      console.log(`left room-${roomId}`);
    });

    // notify users upon disconnection
    socket.on("disconnect", () => {
      socket.leave(`room-${channelId}`);
      socket.broadcast.emit("user disconnected", socket.id);
    });
  });
}

export function sendMessageToSocket(message: any) {
  if (io) {
    io.to(`room-${channelId}`).emit("msg_rcvd", message);
  } else {
    console.error("Socket.IO server is not initialized");
  }
}
