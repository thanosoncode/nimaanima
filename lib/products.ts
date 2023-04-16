import { prisma } from "./prisma";

const getSingleProduct = async (id: string) => {
  const product = await prisma.product.findUnique({ where: { id } });
  return product;
};

export const getAllProducts = async () => {
  const products = await prisma.product.findMany({});
  return products;
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

export { createProduct, updateProduct, getSingleProduct, deleteProduct };
