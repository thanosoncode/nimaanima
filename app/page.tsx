import Products from './(routes)/products/Products';
import Footer from './components/footer/Footer';
import { Category, Level, SearchParams, SortBy } from './utils/types';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

const Home = async ({ searchParams }: SearchParams) => {
  const products = await prisma.product.findMany();
  const selectedCategory = searchParams.category as Category;
  const sort = searchParams.sort as SortBy | undefined;

  return (
    <>
      <Products
        selectedCategory={selectedCategory}
        products={products}
        sort={sort}
      />
      <Footer level={Level.two} />
    </>
  );
};
export default Home;
