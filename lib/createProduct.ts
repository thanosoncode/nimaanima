import { prisma } from "./prisma";

const createProduct = async (product: {
  name: string;
  description: string;
  price: number;
  image: string;
}) => {
  const newProduct = await prisma.product.create({
    data: product,
  });
  return newProduct;
};

export { createProduct };
