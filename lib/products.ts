import { prisma } from "./prisma";

export const getAllProducts = async () => {
  const products = await prisma.product.findMany({});
  return products;
};

export const getCategoryProducts = async (category: string) => {
  const products = await prisma.product.findMany({
    where: {
      category,
    },
  });
  return products;
};

export const getSingleProduct = async (id: string) => {
  const product = await prisma.product.findUnique({ where: { id } });
  return product;
};

const updateProduct = async (
  product: {
    name: string;
    description: string;
    price: number;
    category: string;
    images: string[];
  },
  id: string,
) => {
  const newProduct = await prisma.product.update({
    where: {
      id,
    },
    data: product,
  });
  return newProduct;
};

const deleteProduct = async (id: string) => {
  const product = await prisma.product.delete({
    where: { id },
  });
  return product;
};

export { updateProduct, deleteProduct };
