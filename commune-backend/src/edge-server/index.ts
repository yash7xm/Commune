import { Server, Socket } from "socket.io";
import { Server as HttpServer } from "http";

let io: Server;
let username: any;
let channelId: string;

export function socketServer(server: HttpServer) {
  io = new Server(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
      allowedHeaders: ["my-custom-header"],
      credentials: true,
    },
  });

  io.use((socket: any, next) => {
    username = socket.handshake.auth.username;
    if (!username) {
      return next(new Error("Invalid Username"));
    }
    socket.username = username;
    next();
  });

  io.on("connection", (socket: any) => {
    console.log("User connected:", socket.id);
    console.log("Username", socket.handshake.auth.username);

    // join room
    socket.on("joinRoom", (roomId: string) => {
      channelId = roomId;
      socket.join(roomId);
      console.log("joined", roomId);
    });

    // notify users upon disconnection
    socket.on("disconnect", () => {
      socket.broadcast.emit("user disconnected", socket.id);
    });
  });
}

export function sendMessageToSocket(message: any) {
  if (io) {
    io.to(channelId).emit("msg_rcvd", message);
  } else {
    console.error("Socket.IO server is not initialized");
  }
}
