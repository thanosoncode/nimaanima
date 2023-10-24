import { Category } from '@/app/utils/types';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface CategoryButtonProps {
  category: {
    id: number;
    name: Category;
    image: StaticImageData;
  };
  selectedCategory: Category;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({
  category,
  selectedCategory,
}) => {
  const isSelected = selectedCategory === category.name;

  return (
    <Link
      href={`?category=${category.name}`}
      className='flex cursor-pointer flex-col items-center justify-center gap-2'
    >
      <div className='h-16 w-16 overflow-hidden rounded-full duration-300 ease-in-out  sm:h-20 sm:w-20 '>
        <Image
          src={category.image}
          alt={category.name}
          className='h-16 w-16  object-cover sm:h-20 sm:w-20'
        />
      </div>
      <p
        className={`px-0 pb-1 text-sm duration-300 ease-in-out sm:px-2 ${
          isSelected ? 'underline' : ''
        }`}
      >
        {category.name}
      </p>
    </Link>
  );
};
export default CategoryButton;
