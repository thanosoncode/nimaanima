import { createProduct } from "@/lib/products";
import { NextResponse, type NextRequest } from "next/server";

export async function POST(request: NextRequest, response: NextResponse) {
  const { name, description, price, images, category } =
    (await request.json()) as {
      name: string;
      description: string;
      price: number;
      images: string[];
      category: string;
    };

  if (!name || !description || !price || typeof price === "string") {
    return NextResponse.json({
      message: "name, description, price, image url are required",
    });
  }
  const product = await createProduct({
    name,
    category,
    price,
    description,
    images,
  });

  if (product) {
    return NextResponse.json(product);
  }

  return NextResponse.json({});
}
