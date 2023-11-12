import { Category, Product, SortBy, UserSession } from '@/app/utils/types';
import Container from '../../components/container/Container';
import ProductsHeader from './header/ProductsHeader';
import ProductList from './list/ProductList';

interface ProductsProps {
  selectedCategory: Category;
  products: Product[];
  sort: SortBy | undefined;
}

const Products: React.FC<ProductsProps> = ({
  selectedCategory,
  products,
  sort,
}) => {
  return (
    <>
      <ProductsHeader selectedCategory={selectedCategory} />
      <Container classes='h-full'>
        <div className='mt-8 mb-16'>
          <ProductList
            title={'Find something you love'}
            products={products}
            selectedCategory={selectedCategory}
            sort={sort}
          />
        </div>
      </Container>
    </>
  );
};
export default Products;
