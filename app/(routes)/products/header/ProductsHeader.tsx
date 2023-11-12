import { Category } from '@/app/utils/types';
import CategoryButton from './categoryButton/CategoryButton';
import { categories } from '@/app/utils/constants';
import ShapeOne from '@/app/components/svg/ShapeOne';

interface ProductsHeaderProps {
  selectedCategory: Category;
}

const ProductsHeader: React.FC<ProductsHeaderProps> = ({
  selectedCategory,
}) => {
  return (
    <div className='mt-6 sm:mt-12'>
      {/* <div className='rotate-180'>
        <ShapeOne fill='#F8EBE6' />
      </div> */}
      <header className='relative pb-4 '>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='whitespace-normal text-center font-thin sm:whitespace-nowrap text-4xl md:text-5xl mb-6  sm:mb-8 '>
            Handmade one&nbsp;of&nbsp;a&nbsp;kind&nbsp;creations
          </h1>
          <section className='flex items-center justify-center gap-6  sm:gap-12'>
            {categories.map((category) => (
              <CategoryButton
                category={category}
                key={category.name}
                selectedCategory={selectedCategory}
              />
            ))}
          </section>
        </div>
      </header>
      {/* <div className=''>
        <ShapeOne fill='#F8EBE6' />
      </div> */}
    </div>
  );
};
export default ProductsHeader;
