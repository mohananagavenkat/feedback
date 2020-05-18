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
  return res.redirect("/");
});

router.get("/logout", async (req, res) => {
  await req.logout();
  req.session = null;
  req.sessionOptions.maxAge = 0;
  return res.redirect("/");
});

module.exports = router;
