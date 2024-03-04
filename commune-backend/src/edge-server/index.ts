import { Server, Socket } from "socket.io";
import { Server as HttpServer } from "http";

let io: Server;
let username: any;

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

    // fetch existing users
    const users = [];
    for (let [id, socket] of io.of("/").sockets) {
      users.push({
        userID: id,
        username: socket.handshake.auth.username,
        name: socket.handshake.auth.name,
      });
    }
    socket.emit("users", users);

    // notify existing users
    socket.broadcast.emit("user connected", {
      userID: socket.id,
      username: socket.username,
    });

    // handle private messages
    socket.on("private message", ({ content, to }: any) => {
      console.log(content);
      socket.to(to).emit("private message", {
        content,
        from: socket.id,
      });
    });

    // notify users upon disconnection
    socket.on("disconnect", () => {
      socket.broadcast.emit("user disconnected", socket.id);
    });
  });
}

export function sendMessageToSocket(recipient: string, message: any) {
  if (io) {
    io.emit("message", message);
  } else {
    console.error("Socket.IO server is not initialized");
  }
}
