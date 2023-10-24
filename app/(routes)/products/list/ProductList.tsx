import { Category, Product } from '../../../utils/types';
import Image from 'next/image';
import Link from 'next/link';
import Filter from './filter/Filter';

interface ProductsProps {
  products: Product[];
  filterByCategory: boolean;
  title: string;
  showFilter: boolean;
  selectedCategory: Category;
}

const ProductList: React.FC<ProductsProps> = ({
  products,
  filterByCategory,
  title,
  showFilter,
  selectedCategory,
}) => {
  const filteredProducts = products.filter((product) =>
    selectedCategory ? product.category === selectedCategory : product
  );

  const productsToShow = filterByCategory ? filteredProducts : products;

  return (
    <main>
      <div className='flex justify-between'>
        <h4 className='mb-4 text-2xl font-light'>{title}</h4>
        {showFilter ? <Filter /> : null}
      </div>
      <section
        style={{
          display: 'grid',
          justifyContent: 'center',
          gap: '80px 20px',
        }}
        className='auto-rows-tight grid-cols-tight sm:auto-rows-wide sm:grid-cols-wide'
      >
        {productsToShow.map((product) => (
          <div key={product.name}>
            <Link
              href={`/products/${product.id}`}
              style={{
                maxWidth: '100%',
                position: 'relative',
                height: '100%',
                display: 'block',
              }}
            >
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className='rounded-xl object-cover'
              />
            </Link>
            <Link
              href={`/products/${product.id}`}
              style={{ display: 'block', padding: '4px' }}
            >
              <p className=''>{product.name}</p>
              <p className=''>€ {product.price}</p>
            </Link>
          </div>
        ))}
      </section>
    </main>
  );
};
export default ProductList;
