import express from "express";
import { MessageController } from "../../controllers";

const router = express.Router();

router.post("/send", MessageController);

export default router;
