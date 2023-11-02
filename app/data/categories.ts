import { StaticImageData } from 'next/image';
import dolls from '../../public/assets/categories/category-dolls.webp';
import straps from '../../public/assets/categories/category-straps.webp';
import tablet from '../../public/assets/categories/category-tablet.webp';
import tapestry from '../../public/assets/categories/category-tapestry.webp';
import { Category } from '../utils/types';

type CategoryButton = {
  id: number;
  name: Category;
  image: StaticImageData;
};

export const categories: CategoryButton[] = [
  { id: 1, name: 'Dolls', image: dolls },
  { id: 2, name: 'Straps', image: straps },
  { id: 3, name: 'Bracelets', image: tablet },
  { id: 4, name: 'Tapestry', image: tapestry },
];
