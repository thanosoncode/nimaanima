import { getServerSession } from 'next-auth';
import Products from './(routes)/products/Products';
import { Category, SearchParams, SortBy, UserSession } from './utils/types';
import { prisma } from '@/lib/prisma';
import { authOptions } from './api/auth/[...nextauth]/route';

// export const revalidate = 0;

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
