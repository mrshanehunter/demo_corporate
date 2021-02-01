require("dotenv").config()

const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
const redirectS = process.env.GATSBY_STRIPE_REDIRECT_S;
const redirectR = process.env.GATSBY_STRIPE_REDIRECT_R;

module.exports.handler = async (event, context, callback) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: JSON.parse(event.body),
    mode: "payment",
    success_url: redirectS + "?session_id={CHECKOUT_SESSION_ID}",
    cancel_url: redirectR,
  })



  const response = {
    statusCode: 200,
    body: JSON.stringify(session),
  }
  callback(null, response)
}