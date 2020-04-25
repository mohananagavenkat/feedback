const express = require("express");
const router = express.Router();

// const passport = require('../../auth');
const passport = require("passport");

router.get("/", (req, res) => {
  return res.json({
    status: 200,
    message: "Auth API is working fine"
  });
});

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"]
  })
);

router.get("/google/callback", passport.authenticate("google"), (req, res) => {
  res.redirect("/profile");
});

module.exports = router;
