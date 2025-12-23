import Stripe from "stripe";

export function getStripe(): Stripe {
  const apiKey = process.env.NEXT_PUBLIC_SECRET_KEY_STRIPE;
  if (!apiKey) {
    throw new Error("Stripe API key is not defined");
  }

  return new Stripe(apiKey, {});
}
