const express = require("express");

const channelRoutes = require("./channel-routes");
const userRoutes = require("./user-routes");
const messageRoutes = require("./message-routes");

const router = express.Router();

router.use("/channel", channelRoutes);

router.use("/user", userRoutes);

router.use("/msg", messageRoutes);

module.exports = router;
