const express = require("express");
const cors = require("cors");
const apiRoutes = require("../routes");
const { ServerConfig } = require("../config");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

app.get("/dog", (req,res) => {
    res.send("woff woff !!");
})

app.listen(ServerConfig.API_SERVER_PORT, () => {
  console.log(`Api server listening at ${ServerConfig.API_SERVER_PORT}`);
});
