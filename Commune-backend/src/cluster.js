const { Server } = require("socket.io");
const { setupWorker } = require("@socket.io/sticky");
const { ServerConfig } = require("./config");

function socketServer(server) {
  const io = new Server(server, {
    cors: {
      origin: "http://localhost:3000",
    },
  });

  io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    // join room
    socket.on("joinRoom", (roomId) => {
      socket.join(`room-${roomId}`);
      console.log(`Joined room room-${roomId}`);
    });

    // notify users upon disconnection
    socket.on("disconnect", () => {
      socket.broadcast.emit("user disconnected", socket.id);
    });
  });

  setupWorker(io);
}

function sendMessageToSocket(io, message) {
  if (io) {
    io.to(`room-${message.channelId}`).emit("msg_rcvd", message);
  } else {
    console.error("Socket.IO server is not initialized");
  }
}

module.exports = { socketServer, sendMessageToSocket };
