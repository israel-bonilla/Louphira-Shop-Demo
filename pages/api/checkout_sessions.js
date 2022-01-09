const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  const { cart } = req.body;

  // console.log(cart);
  const transformedItems = cart.map(item => ({
    quantity: item.qty,
    price_data: {
      currency: "usd",
      unit_amount: item.price * 100,
      product_data: {
        name: item.title,
        images: [item.image],
      },
    },
  }));
  
  //Create Checkout Sessions.
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    shipping_address_collection: {
      allowed_countries: ['US', 'CA'],
    },
    shipping_rates: ['shr_1KEyGPEWe5STAGPAvSTkDYSz'],
    line_items: transformedItems,
    mode: 'payment',
    success_url: `${process.env.HOST}/success`,
    cancel_url: `${process.env.HOST}/canceled`,
    // matadata: {},
  });

  res.status(200).json({ id: session.id });
}