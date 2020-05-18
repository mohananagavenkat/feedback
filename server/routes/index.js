const express = require("express");
const router = express.Router();

const feedbackRoutes = require("./feedbackRoutes");
const authRoutes = require("./authRoutes");
const profileRoutes = require("./profileRoutes");
const paymentRoutes = require("./paymentRoutes");

const requireLogin = require("../middlewares/requireLogin");

router.get("/", (req, res) => {
  return res.json({
    status: 200,
    message: "API is working fine"
  });
});

router.use("/feedback", requireLogin, feedbackRoutes);
router.use("/auth", authRoutes);
router.use("/profile", profileRoutes);
router.use("/payments", requireLogin, paymentRoutes);

module.exports = router;
