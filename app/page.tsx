import Products from './(routes)/products/Products';
import { Category, SearchParams, SortBy } from './utils/types';
import { prisma } from '@/lib/prisma';

const Home = async ({ searchParams }: SearchParams) => {
  const products = await prisma.product.findMany();
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
