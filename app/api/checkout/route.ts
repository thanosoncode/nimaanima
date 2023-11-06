import { Product } from '@/app/utils/types';
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {});

const baseUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://nimaanima.vercel.app';

export async function POST(request: Request) {
  const { cartItems } = (await request.json()) as { cartItems: Product[] };

  if (!cartItems || cartItems.length === 0) {
    return NextResponse.json({}, { status: 400 });
  }

  const stripePrices = cartItems.map((item) => item.stripePriceId);

  const lineItems = stripePrices.map((price) => ({ price, quantity: 1 }));

  const successParams = cartItems
    .map((item, index) =>
      index === 0 ? `productId=${item.id}` : `&productId=${item.id}`
    )
    .join('');

  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    shipping_address_collection: { allowed_countries: ['GR'] },
    mode: 'payment',
    success_url: `${baseUrl}/order-success?${successParams}`,
    cancel_url: `${baseUrl}/cart`,
    automatic_tax: { enabled: true },
    invoice_creation: { enabled: true },
    expand: ['invoice', 'customer', 'invoice.subscription', 'payment_intent'],
  });

  return NextResponse.json(session.url);
}
