const express = require("express");
const router = express.Router();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

router.get("/", (req, res) => {
  res.json({ status: 200, message: "Payments is working fine" });
});
router.post("/", async (req, res) => {
  let paymentInfo;
  try {
    paymentInfo = await stripe.charges.create({
      amount: 500,
      currency: "usd",
      source: req.body.token.id,
      description: "5$ for 5 Credits"
    });

    if (paymentInfo.status === "succeeded") {
      req.user.credits += 5;
      const updatedUser = await req.user.save();
      console.log("Updated user after payment", updatedUser);
      res.json({
        status: 200,
        profile: updatedUser
      });
    } else {
      throw new Error("Something went wrong");
    }
  } catch (error) {
    res.send(500).json({ error });
  }
});

module.exports = router;
