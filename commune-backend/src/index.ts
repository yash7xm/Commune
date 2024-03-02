import express from "express";
import cors from "cors";

import { ServerConfig } from "./config";
import apiRoutes from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

app.listen(ServerConfig.PORT, () => {
  console.log(`Server started on ${ServerConfig.PORT}`);
});
