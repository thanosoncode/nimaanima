import { prisma } from "@/lib/prisma";
import { NextResponse, type NextRequest } from "next/server";
import fs from "fs";

export async function GET(request: NextRequest, response: NextResponse) {
  const filePath = "app/api/products/products.json";

  const rawData = fs.readFileSync(filePath, "utf8");
  const data = JSON.parse(rawData);

  return NextResponse.json(data);
}
