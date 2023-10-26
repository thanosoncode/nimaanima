import { Category, Product } from '@/app/utils/types';
import Container from '../../components/container/Container';
import ProductsHeader from './header/ProductsHeader';
import ProductList from './list/ProductList';

interface ProductsProps {
  selectedCategory: Category;
  products: Product[];
}

const Products: React.FC<ProductsProps> = ({ selectedCategory, products }) => {
  return (
    <>
      <ProductsHeader selectedCategory={selectedCategory} />
      <Container classes='h-full lg:px-8 lg:w-full xl:max-w-[1140px] md:w-full md:px-8 w-full px-2'>
        <div className='mt-10 mb-20'>
          <ProductList
            title={'Find something you love'}
            products={products}
            selectedCategory={selectedCategory}
            filterByCategory={true}
            showFilter={true}
          />
        </div>
      </Container>
    </>
  );
};
export default Products;
