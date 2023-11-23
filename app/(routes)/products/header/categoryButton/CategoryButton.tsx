'use client';
import { Category } from '@/app/utils/types';
import Image, { StaticImageData } from 'next/image';
import { useSearchParams, useRouter } from 'next/navigation';

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
  const params = useSearchParams();
  const router = useRouter();

  const cat = params.get('category');
  const sort = params.get('sort');

  const handleCategoryClick = () => {
    if (sort) {
      router.push(`/?category=${category.name}&sort=${sort}`);
    } else {
      router.push(`/?category=${category.name}`);
    }
  };

  return (
    <button
      onClick={handleCategoryClick}
      className="group flex cursor-pointer flex-col items-center justify-center gap-2"
    >
      <div className="relative h-16 w-16 overflow-hidden rounded-full border border-neutral-400 duration-100 ease-in-out hover:shadow-cart group-hover:scale-105 sm:h-20 sm:w-20 md:h-28 md:w-28">
        <Image
          src={category.image}
          alt={category.name}
          className="object-cover"
          fill
          sizes="(min-width: 640px) 80px, 64px"
          placeholder="blur"
        />
      </div>
      <p
        className={`border-b  px-0 pb-1  font-medium duration-200 ease-in-out group-hover:border-neutral-400 sm:px-2 ${
          isSelected ? 'border-b border-black' : 'border-transparent'
        }`}
      >
        {category.name}
      </p>
    </button>
  );
};
export default CategoryButton;
