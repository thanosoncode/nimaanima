import { prisma } from "./prisma";

const getSigleProduct = async (id: string) => {
  try {
    const product = await prisma.product.findUnique({
      where: { id },
    });
    return product;
  } catch (error) {
    throw new Error("could not get product");
  }
};

export const getAllProducts = async () => {
  try {
    const products = await prisma.product.findMany({});
    return products;
  } catch (error) {
    throw new Error("could not get product");
  }
};

const createProduct = async (product: {
  name: string;
  description: string;
  price: number;
  category: string;
  images: string[];
}) => {
  const newProduct = await prisma.product.create({
    data: product,
  });
  return newProduct;
};

const updateProduct = async (
  product: {
    name: string;
    description: string;
    price: number;
    category: string;
    images: string[];
  },
  id: string
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

export { createProduct, updateProduct, getSigleProduct, deleteProduct };
