import { NextResponse, type NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest, response: NextResponse) {
  const { pathname } = new URL(request.url);
  const id = pathname.split("products/")[1];
  const product = await prisma.product.findUnique({ where: { id } });
  if (product) {
    return NextResponse.json(product);
  }
  return NextResponse.json({});
}
