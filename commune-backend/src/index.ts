import http from "http";
import { app } from "./api-server";
import { socketServer } from "./edge-server";
import { ServerConfig } from "./config";
import { Socket } from "socket.io";

// Create HTTP server
const server = http.createServer(app);

const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});

io.on("connection", (socket: Socket) => {
  console.log("User connected:", socket.id);

  socket.on("joinRoom", (roomId: string) => {
    // Join the new room
    socket.join(`room-${roomId}`);
    console.log(`Joined room room-${roomId}`);
  });
});

export function sendMessageToSocket(message: any) {
  if (io) {
    io.to(`room-${message.channelId}`).emit("msg_rcvd", message);
  } else {
    console.error("Socket.IO server is not initialized");
  }
}

// Start server
server.listen(ServerConfig.PORT, () => {
  console.log(`Server listening on port ${ServerConfig.PORT}`);
});
