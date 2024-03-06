import express from "express";
import channelRoutes from "./channel-routes";

import userRoutes from "./user-routes";

const router = express.Router();

router.use("/msg", channelRoutes);

router.use("/user", userRoutes);

export default router;
