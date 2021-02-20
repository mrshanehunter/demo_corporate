require("dotenv").config();

const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

module.exports.handler = async (sesh, context) => {
  const session = await stripe.checkout.sessions.listLineItems(sesh, { limit: 5 },
    function(err, lineItems) {
      return(lineItems)
    }
  );
};


