const express = require("express");
const router = express.Router();

const feedbackRoutes = require("./feedbackRoutes");
const authRoutes = require("./authRoutes");
const profileRoutes = require("./profileRoutes");

router.get("/", (req, res) => {
  return res.json({
    status: 200,
    message: "API is working fine"
  });
});

router.use("/feedback", feedbackRoutes);
router.use("/auth", authRoutes);
router.use("/profile", profileRoutes);

module.exports = router;
