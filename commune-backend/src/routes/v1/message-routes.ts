import express from "express";

const router = express.Router();

router.post("/send", (req, res) => {
  console.log(req.body.message);
  res.sendStatus(200);
});

export default router;
