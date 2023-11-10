import { Category, CategoryLink } from '@/app/utils/types';
import CategoryButton from './categoryButton/CategoryButton';

import dolls from '../../../../public/assets/categories/category-dolls.webp';
import straps from '../../../../public/assets/categories/category-straps.webp';
import tablet from '../../../../public/assets/categories/category-tablet.webp';
import tapestry from '../../../../public/assets/categories/category-tapestry.webp';

export const categories: CategoryLink[] = [
  { id: 1, name: 'Dolls', image: dolls },
  { id: 2, name: 'Straps', image: straps },
  { id: 3, name: 'Bracelets', image: tablet },
  { id: 4, name: 'Tapestry', image: tapestry },
];

interface ProductsHeaderProps {
  selectedCategory: Category;
}

const ProductsHeader: React.FC<ProductsHeaderProps> = ({
  selectedCategory,
}) => {
  return (
    <header className='relative bg-lightGreen-400 py-10'>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='whitespace-normal  text-center text-2xl font-light tracking-wide sm:whitespace-nowrap sm:text-3xl'>
          Handmade and one of a kind creations.
        </h1>
        <p className='pb-0 text-center font-extralight sm:pb-8 sm:font-normal'>
          Browse the categories of our unique selection
        </p>
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
  );
};
export default ProductsHeader;
