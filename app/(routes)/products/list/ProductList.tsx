import { Category, Product } from '../../../utils/types';
import Image from 'next/image';
import Link from 'next/link';
import Filter from './filter/Filter';
import AddToCartButton from './addToCartButton/AddToCartButton';

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
      <section className='grid gap-y-20 gap-x-5 justify-center  auto-rows-tight grid-cols-tight sm:auto-rows-wide sm:grid-cols-wide'>
        {productsToShow.map((product) => (
          <div key={product.name}>
            <Link
              href={`/products/${product.id}`}
              className='w-full h-full relative block'
            >
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className='object-cover rounded-xl'
              />
            </Link>
            <div>
              <div className='px-1 mb-1'>
                <div className='flex items-center justify-between '>
                  <p className=''>{product.name}</p>
                  <p className=''>€ {product.price}</p>
                </div>
              </div>
              <AddToCartButton product={product} />
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};
export default ProductList;
