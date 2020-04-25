const passport = require("passport");
const googleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const User = mongoose.model("users");

const { GOOGLE_OAUTH_CLIENT_ID, GOOGLE_OAUTH_CLIENT_KEY } = process.env;

passport.serializeUser((user, next) => {
  console.log("serializing user");
  console.log(user.id);
  next(null, user.id);
});

passport.deserializeUser(async (id, next) => {
  let user;
  try {
    user = await User.findById(id);
  } catch (error) {
    next(error, null);
  }
  next(null, user);
});

passport.use(
  new googleStrategy(
    {
      clientID: GOOGLE_OAUTH_CLIENT_ID,
      clientSecret: GOOGLE_OAUTH_CLIENT_KEY,
      callbackURL: "/auth/google/callback"
    },
    async (accessToken, refreshToken, profile, next) => {
      const { sub: googleID, name, email, picture = "" } = profile._json;
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        console.log("Existing User");
        console.log(existingUser);
        next(null, existingUser);
      } else {
        let user;
        try {
          user = await new User({
            googleID,
            name,
            email,
            picture
          }).save();
        } catch (error) {
          console.log("Error While Creating New User");
          next(error.message, null);
        }
        next(null, user);
      }
    }
  )
);
