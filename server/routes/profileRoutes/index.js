const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  return res.json({
    status: 200,
    message: "Profile API is working fine"
  });
});

module.exports = router;