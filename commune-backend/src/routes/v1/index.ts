import express from "express";
import messageRoutes from "./message-routes";

const router = express.Router();

router.use("/msg", messageRoutes);

export default router;