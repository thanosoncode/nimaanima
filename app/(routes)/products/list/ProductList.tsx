import { Category, Product, SortBy } from '../../../utils/types';
import Image from 'next/image';
import Link from 'next/link';
import Filter from './filter/Filter';
import AddToCartButton from '../../../components/addToCartButton/AddToCartButton';
import ProductItem from './productItem/ProductItem';

interface ProductsProps {
  products: Product[];
  title: string;
  showFilter: boolean;
  selectedCategory: Category;
  sort: SortBy | undefined;
}

const ProductList: React.FC<ProductsProps> = ({
  products,
  title,
  showFilter,
  selectedCategory,
  sort,
}) => {
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
      <div className='flex justify-between'>
        <h4 className='mb-4 text-2xl font-light'>{title}</h4>
        {showFilter ? <Filter /> : null}
      </div>
      <section className='grid gap-y-8 md:gap-y-16 gap-x-5 justify-center grid-cols-1  xs:grid-cols-2 sm:grid-cols-2  md:grid-cols-3 '>
        {productsToShow.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </section>
    </main>
  );
};
export default ProductList;
