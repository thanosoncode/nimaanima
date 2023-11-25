import { Category, Product, SortBy, UserSession } from '../../../utils/types';
import ProductItem from './productItem/ProductItem';
import { getServerSession } from 'next-auth';
import Controls from './controls/Controls';
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';

interface ProductsProps {
  products: Product[];
  title: string;
  selectedCategory: Category;
  sort: SortBy | undefined;
}

const ProductList: React.FC<ProductsProps> = async ({
  products,
  title,
  selectedCategory,
  sort,
}) => {
  const session = (await getServerSession(authOptions)) as UserSession | null;

  const filteredProducts = products.filter((product) =>
    selectedCategory ? product.category === selectedCategory : product,
  );

  const productsToShow = !sort
    ? filteredProducts
    : sort === 'asc'
    ? filteredProducts.sort((a, b) => a.price - b.price)
    : filteredProducts.sort((a, b) => b.price - a.price);

  return (
    <main>
      <div className="flex items-start justify-between">
        <h4 className="mb-4 text-2xl font-light">{title}</h4>
        <Controls />
      </div>
      <section className="grid grid-cols-2 justify-center gap-y-8 gap-x-4 sm:grid-cols-3 md:grid-cols-4  md:gap-y-8 ">
        {productsToShow.map((product) => (
          <ProductItem product={product} key={product.id} session={session} />
        ))}
      </section>
    </main>
  );
};
export default ProductList;
