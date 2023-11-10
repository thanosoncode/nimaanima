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
      href={{ pathname: '', query: { category: category.name } }}
      className='flex flex-col items-center justify-center gap-2 cursor-pointer group'
    >
      <div className='w-16 h-16 overflow-hidden duration-200 ease-in-out rounded-full sm:h-20 sm:w-20 group-hover:scale-105'>
        <Image
          src={category.image}
          alt={category.name}
          className='object-cover w-16 h-16 sm:h-20 sm:w-20'
          sizes='(min-width: 640px) 80px, 64px'
          placeholder='blur'
        />
      </div>
      <p
        className={`group-hover:border-neutral-400  border-b  px-0 pb-1 text-sm duration-200 ease-in-out sm:px-2 ${
          isSelected ? 'border-black border-b' : ''
        }`}
      >
        {category.name}
      </p>
    </Link>
  );
};
export default CategoryButton;
