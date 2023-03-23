import { createProduct } from "@/lib/createProduct";
import { NextResponse, type NextRequest } from "next/server";

export async function POST(request: NextRequest, response: NextResponse) {
  const { name, description, price, image } = (await request.json()) as {
    name: string;
    description: string;
    price: number;
    image: string;
  };

  if (!name || !description || !image || !price || typeof price === "string") {
    return NextResponse.json({
      message: "name, description, price, image url are required",
    });
  }
  const product = await createProduct({ name, description, price, image });

  if (product) {
    return NextResponse.json(product);
  }

  return NextResponse.json({});
}
