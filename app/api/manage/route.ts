import { prisma } from '@/lib/prisma';
import { NextResponse, type NextRequest } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {});

export async function POST(request: NextRequest, response: NextResponse) {
  const { name, description, price, images, category } =
    (await request.json()) as {
      name: string;
      description: string;
      price: number;
      images: string[];
      category: string;
    };

  if (!name || !description || !price || typeof price === 'string') {
    return NextResponse.json({
      message: 'name, description, price, image url are required',
    });
  }

  try {
    const stripeProduct = await stripe.products.create({
      name,
      description,
      images,
      tax_code: 'txcd_99999999',
      type: 'good',
    });

    const stripePrice = await stripe.prices.create({
      unit_amount: Number(price) * 100,
      currency: 'eur',
      product: stripeProduct.id,
    });

    const product = await prisma.product.create({
      data: {
        name,
        category,
        price,
        description,
        images,
        gift: false,
        sold: false,
        stripePriceId: stripePrice.id,
        stripeProductId: stripeProduct.id,
      },
    });

    if (product && stripeProduct && stripePrice) {
      return NextResponse.json(product);
    }
  } catch (error) {
    return NextResponse.json(error);
  }

  return NextResponse.json(
    { message: 'Something went wrong' },
    { status: 400 }
  );
}
