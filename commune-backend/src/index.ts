import http from "http";
import { app } from "./api-server";
import { socketServer } from "./edge-server";
import { ServerConfig } from "./config";

// Create HTTP server
const server = http.createServer(app);

// Start server
server.listen(ServerConfig.PORT, () => {
  console.log(`Server listening on port ${ServerConfig.PORT}`);
});

// Initialize Socket.IO server
socketServer(server);
