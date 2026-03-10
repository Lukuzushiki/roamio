import { getStripe } from "@/src/lib/helper/stripe";

type CheckoutRequestBody = {
  price?: number;
  type?: string;
};

const normalizeBaseUrl = (url?: string | null) => {
  if (!url) return "";
  return url.endsWith("/") ? url.slice(0, -1) : url;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as CheckoutRequestBody;
    const price = Number(body.price);
    const type = body.type || "Data";

    if (!Number.isFinite(price) || price <= 0) {
      return Response.json({ error: "Invalid product price" }, { status: 400 });
    }

    const envBaseUrl = normalizeBaseUrl(
      process.env.NEXT_PUBLIC_SITE_URL ||
        process.env.NEXT_PUBLIC_APP_URL ||
        process.env.SITE_URL ||
        (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : ""),
    );
    const requestBaseUrl = normalizeBaseUrl(new URL(request.url).origin);
    const baseUrl = envBaseUrl || requestBaseUrl;

    const session = await getStripe().checkout.sessions.create({
      mode: "payment",
      success_url: `${baseUrl}/success`,
      cancel_url: `${baseUrl}/checkout`,
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "usd",
            product_data: {
              name: `Roamio - ${type} Plan`,
            },
            unit_amount: Math.round(price * 100),
          },
        },
      ],
    });

    return Response.json({ url: session.url });
  } catch (error: unknown) {
    console.error("Failed to create Stripe checkout session:", error);
    const message =
      error instanceof Error
        ? error.message
        : "Unexpected error creating Stripe checkout session";

    return Response.json({ error: message }, { status: 500 });
  }
}
