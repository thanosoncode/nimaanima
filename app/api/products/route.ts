import { prisma } from "@/lib/prisma";
import { NextResponse, type NextRequest } from "next/server";
import fs from "fs";
import { getAllProducts } from "@/lib/products";

export async function GET(request: NextRequest, response: NextResponse) {
  const products = await getAllProducts();

  return NextResponse.json(products);
}
