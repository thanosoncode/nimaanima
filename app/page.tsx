import { getAllProducts } from '@/lib/products';
import Products from './(routes)/products/Products';
import { Category, Product } from './utils/types';

const Home = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const products = (await getAllProducts()) as Product[];

  const selectedCategory = searchParams.category as Category;

  return <Products selectedCategory={selectedCategory} products={products} />;
};
export default Home;
