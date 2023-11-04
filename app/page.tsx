import { getServerSession } from 'next-auth';
import Products from './(routes)/products/Products';
import { Category, SortBy, UserSession } from './utils/types';
import { prisma } from '@/lib/prisma';
import { authOptions } from './api/auth/[...nextauth]/route';

const Home = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
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
