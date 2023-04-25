import { NextResponse, type NextRequest } from "next/server";
import { getSingleProduct } from "@/lib/products";

export async function GET(request: NextRequest, response: NextResponse) {
  const { pathname } = new URL(request.url);
  const id = pathname.split("products/")[1];
  const product = await getSingleProduct(id);
  if (product) {
    return NextResponse.json(product);
  }
  return NextResponse.json({});
}
