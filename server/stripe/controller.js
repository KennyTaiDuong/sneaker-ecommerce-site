const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

const getPublishableKey = (req, res) => {
  res.send({
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  });
};

const createPaymentIntent = async (req, res) => {
  const { items } = req.body;

  function calculateTotal(shoes) {
    if (shoes.length === 0) {
      return 0;
    }

    const total = shoes.map((shoe) => {
      return shoe.price;
    });

    return total.reduce((acc, current) => {
      return acc + current;
    });
  }

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateTotal(items) * 100,
      currency: "usd",
      automatic_payment_methods: { enabled: true },
    });

    res.send({ clientSecret: paymentIntent.client_secret, body: req.body });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports = {
  getPublishableKey,
  createPaymentIntent,
};
