import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {});

export async function POST(request: Request) {
  const session = await stripe.checkout.sessions.create({
    line_items: [{ price: 'price_1O6qFgBkAdxa1M90P4Jk66p1', quantity: 1 }],
    shipping_address_collection: { allowed_countries: ['GR'] },
    mode: 'payment',
    success_url: 'http://localhost:3000',
    cancel_url: 'http://localhost:3000',
    automatic_tax: { enabled: true },
    invoice_creation: { enabled: true },
    expand: ['invoice', 'customer', 'invoice.subscription', 'payment_intent'],
  });

  return NextResponse.json(session.url);
}
