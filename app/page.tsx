import { getAllProducts } from '@/lib/products';
import Products from './(routes)/products/Products';
import { Category, Product, SortBy } from './utils/types';
import { prisma } from '@/lib/prisma';

const Home = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  // const products = (await getAllProducts()) as Product[];
  const products = await prisma.newProduct.findMany();
  const selectedCategory = searchParams.category as Category;
  const sort = searchParams.sort as SortBy | undefined;

  return (
    <Products
      selectedCategory={selectedCategory}
      products={products}
      sort={sort}
    />
  );
};
export default Home;
