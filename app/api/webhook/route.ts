import { prisma } from '@/lib/prisma';
import { Product } from '@prisma/client';
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {});
const secret =
  process.env.NODE_ENV === 'development'
    ? process.env.STRIPE_WEB_HOOK_SECRET_TEST
    : process.env.STRIPE_WEB_HOOK_SECRET;

export async function POST(request: Request, response: Response) {
  const sig = request.headers.get('stripe-signature') ?? '';
  let event;

  const body = await request.text();
  try {
    event = stripe.webhooks.constructEvent(body, sig, secret!);
  } catch (err) {
    const error = err as Error;
    return NextResponse.json(`Webhook Error: ${error.message}`, {
      status: 400,
    });
  }

  switch (event.type) {
    case 'payment_intent.succeeded':
      //   const paymentIntentSucceeded = event.data.object;
      //   console.log("paymentIntentSucceeded", paymentIntentSucceeded);
      //   console.log("receipt.email", paymentIntentSucceeded.receipt_email);
      //   console.log("shipping", paymentIntentSucceeded.shipping.address);
      break;

    case 'checkout.session.completed':
      const paymentIntentSucceeded = event.data.object;
      const { shipping_details, customer_details, id } = paymentIntentSucceeded;
      const email = customer_details?.email;

      const session = await stripe.checkout.sessions.listLineItems(id);
      const lineItems = session.data;
      const products: Product[] = [];

      for (const item of lineItems) {
        const product = await prisma.product.findFirst({
          where: { stripePriceId: item.price?.id },
        });
        if (product) {
          const updatedProduct = await prisma.product.update({
            where: { id: product.id },
            data: {
              sold: true,
            },
          });
          products.push(updatedProduct);
        }
      }
      console.log({ shippingDetails: shipping_details, email, products });
      break;

    default:
    //   console.log(`Unhandled event type ${event.type}`);
  }

  return NextResponse.json({});
}
