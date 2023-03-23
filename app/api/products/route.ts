import { prisma } from "@/lib/prisma";
import { NextResponse, type NextRequest } from "next/server";

export async function GET(request: NextRequest, response: NextResponse) {
  const products = await prisma.product.findMany();

  if (products) {
    return NextResponse.json(products);
  }

  return NextResponse.json({});
}
