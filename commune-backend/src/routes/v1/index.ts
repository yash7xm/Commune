import express from "express";

import channelRoutes from "./channel-routes";
import userRoutes from "./user-routes";
import messageRoutes from "./message-routes";

const router = express.Router();

router.use("/channel", channelRoutes);

router.use("/user", userRoutes);

router.use("/msg", messageRoutes);

export default router;
