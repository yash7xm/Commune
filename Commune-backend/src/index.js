const cluster = require("cluster");
const http = require("http");
const { socketServer } = require("./cluster");
const { ServerConfig } = require("./config");
const { setupMaster } = require("@socket.io/sticky");


const WORKERS_COUNT = 4;

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  for (let i = 0; i < WORKERS_COUNT; i++) {
    cluster.fork();
  }

  // setupMaster(server, {
  //   loadBalancingMethod: "least-connection", // either "random", "round-robin" or "least-connection"
  // });

  cluster.on("exit", (worker) => {
    console.log(`Worker ${worker.process.pid} died`);
    cluster.fork();
  });
} else {
  const { app } = require("./api-server");

  const server = http.createServer(app);

  server.listen(ServerConfig.PORT, () => {
    console.log(`Worker ${process.pid} started`);
    console.log(`Server listening on port ${ServerConfig.PORT}`);
  });

  socketServer(server);
}
