import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {});

const baseUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'nimaanima.vercel.app';

export async function POST(request: Request) {
  const { stripePrices } = (await request.json()) as { stripePrices: string[] };

  if (!stripePrices || stripePrices.length === 0) {
    return NextResponse.json({}, { status: 400 });
  }

  console.log('baseUrl', baseUrl);

  const lineItems = stripePrices.map((price) => ({ price, quantity: 1 }));

  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    shipping_address_collection: { allowed_countries: ['GR'] },
    mode: 'payment',
    success_url: `${baseUrl}/order-success`,
    cancel_url: `${baseUrl}/cart`,
    automatic_tax: { enabled: true },
    invoice_creation: { enabled: true },
    expand: ['invoice', 'customer', 'invoice.subscription', 'payment_intent'],
  });

  console.log('session', session);

  return NextResponse.json(session.url);
}
