import express from "express";
import messageRoutes from "./message-routes";

const { userRoutes } = require("./user-routes");

const router = express.Router();

router.use("/msg", messageRoutes);

router.use("/user", userRoutes);

export default router;
