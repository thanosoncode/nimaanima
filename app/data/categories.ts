import { StaticImageData } from 'next/image';
import dolls from '../../public/assets/category-dolls.webp';
import straps from '../../public/assets/category-straps.webp';
import tablet from '../../public/assets/category-tablet.webp';
import tapestry from '../../public/assets/category-tapestry.webp';
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
