import express, { Request, Response } from "express";
const cors = require("cors");

const { ServerConfig } = require("./config");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/dog", (req: Request, res: Response) => {
  res.send("wuf wuf !!");
});

app.post("/sendMessage", (req: Request, res: Response) => {
  console.log(req.body.message);
  res.sendStatus(200);
});

app.listen(ServerConfig.PORT, () => {
  console.log(`Server started on ${ServerConfig.PORT}`);
});
