import { prisma } from "./prisma";

export const getSigleProduct = async (id: string) => {
  try {
    const product = await prisma.product.findUnique({
      where: { id },
    });
    return product;
  } catch (error) {
    throw new Error("could not get product");
  }
};
