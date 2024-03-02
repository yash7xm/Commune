const express = require("express");
const cors = require("cors");

const app = express();

const PORT = 8080;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/dog", (req, res) => {
  res.send("wuf wuf !!");
});

app.post("/sendMessage", (req, res) => {
  console.log(req.body.message);
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
