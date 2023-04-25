import { NextResponse, type NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { deleteProduct, updateProduct } from "@/lib/products";

export async function DELETE(request: Request) {
  const id = request.url.split("manage/")[1];
  if (!id) {
    return NextResponse.json({ message: "id required" });
  }
  const product = await deleteProduct(id);
  if (!id) {
    return NextResponse.json({ message: "no matching product" });
  }
  return NextResponse.json({ product });
}

export async function PUT(request: Request) {
  const id = request.url.split("manage/")[1];
  if (!id) {
    return NextResponse.json({ message: "id required" });
  }

  const { name, description, price } = (await request.json()) as {
    name: string;
    description: string;
    price: number;
    category: string;
    images: string[];
  };

  if (!name || !description || !price || typeof price === "string") {
    return NextResponse.json({
      message: "name, description, price, image url are required",
    });
  }
  // const product = await updateProduct(
  //   { name, description, price, category, images },
  //   id
  // );

  // if (!product) {
  //   return NextResponse.json({
  //     message: "could not find product with that id",
  //   });
  // }

  return NextResponse.json({});
}
