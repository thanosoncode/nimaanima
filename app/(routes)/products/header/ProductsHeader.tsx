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
    <>
      <div className='rotate-180'>
        <ShapeOne fill='#FDEBD2' />
      </div>
      <header className='relative pb-8 bg-lightPeach-400'>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='whitespace-normal  text-center text-2xl font-thin tracking-wide sm:whitespace-nowrap sm:text-5xl mb-8 '>
            Handmade and one of a kind creations.
          </h1>
          {/* <p className='text-center font-extralight sm:font-normal mb-6'>
          Browse the categories of our unique selection
        </p> */}
          <section className='mt-6 flex items-center justify-center gap-6 sm:mt-0 sm:gap-12'>
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
      <div className=''>
        <ShapeOne fill='#FDEBD2' />
      </div>
    </>
  );
};
export default ProductsHeader;
