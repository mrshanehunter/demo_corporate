require("dotenv").config();

const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);


module.exports.handler = async (sessId, context) => {
  
  const session = await stripe.checkout.sessions.retrieve(sessId, {api_key: process.env.STRIPE_SECRET_KEY});
 
 

  const response = {
    statusCode: 200,
    body: JSON.stringify(session),
  };
  callback(null, response);
};
