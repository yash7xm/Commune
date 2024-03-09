import http from "http";
import { app } from "./api-server";
import { socketServer } from "./edge-server";
import { ServerConfig } from "./config";
import { Socket } from "socket.io";

// Create HTTP server
const server = http.createServer(app);

// Initialize socket server
socketServer(server);

// Start server
server.listen(ServerConfig.PORT, () => {
  console.log(`Server listening on port ${ServerConfig.PORT}`);
});
