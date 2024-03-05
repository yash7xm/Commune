import express from "express";
import messageRoutes from "./message-routes";

import userRoutes from "./user-routes";

const router = express.Router();

router.use("/msg", messageRoutes);

router.use("/user", userRoutes);

export default router;
