import { Category, Product, SortBy, UserSession } from '../../../utils/types';
import SortByButton from './sortByButton/SortByButton';
import ProductItem from './productItem/ProductItem';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

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
    selectedCategory ? product.category === selectedCategory : product
  );

  const productsToShow = !sort
    ? filteredProducts
    : sort === 'asc'
    ? filteredProducts.sort((a, b) => a.price - b.price)
    : filteredProducts.sort((a, b) => b.price - a.price);

  return (
    <main>
      <div className='flex justify-between items-start'>
        <h4 className='mb-4 text-2xl font-light'>{title}</h4>
        <SortByButton />
      </div>
      <section className='grid gap-y-8 md:gap-y-16 gap-x-2 xs:gap-x-5 justify-center grid-cols-2 sm:grid-cols-2  md:grid-cols-3 '>
        {productsToShow.map((product) => (
          <ProductItem
            product={product}
            key={product.id}
            isFavorite={session?.dbUser.favorites
              .map((f) => f.id)
              .includes(product.id)}
          />
        ))}
      </section>
    </main>
  );
};
export default ProductList;
