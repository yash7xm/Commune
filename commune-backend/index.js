const express = require("express");

const app = express();

const PORT = 8080;

app.get('/dog', (req, res) => {
    res.send("wuf wuf !!")
})

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
