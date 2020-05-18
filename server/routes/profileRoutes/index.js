const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  return res.json({ profile: req.user });
});

module.exports = router;
