import Link from 'next/link';
import Container from '../../components/container/Container';
import Image from 'next/image';
import { categories } from '@/app/utils/constants';
import ShapeOne from '@/app/components/svg/ShapeOne';

const Techniques = () => {
  return (
    <div className='mt-8 mb-20'>
      <header className='xl:max-w-[1140px] px-2 lg:px-8  mx-auto w-full mb-12'>
        <h1 className='text-5xl font-thin  text-neutral-950 mb-4'>
          Explore the Techniques Behind Our Handmade Collection
        </h1>
        <h3>
          Curious About the Art of Handcrafting? Delve into Our
          Behind-the-Scenes Stories. Each Technique &ndash; from Amigurumi Dolls
          to Card Woven Guitar Straps &ndash; Reflects the Passion and Precision
          We Infuse into Every Creation
        </h3>
      </header>
      <div className='rotate-180'>
        <ShapeOne fill='#F8EBE6' />
      </div>
      <div className='bg-lightPink-400 '>
        <div className='xl:max-w-[1140px] px-2 lg:px-8 xs:px-12 gap-y-8  mx-auto w-full grid grid-cols-1 sm:grid-cols-2 py-12 gap-8'>
          {categories.map((category, index) => (
            <Link
              href={`/techniques/${category.pathname}`}
              key={index}
              className='rounded-lg shadow-soft hover:shadow-cart overflow-hidden duration-200 block bg-white'
            >
              <div className='relative h-[300px] lg:h-[380px] '>
                <Image
                  alt={category.name}
                  src={category.image}
                  fill
                  className='object-cover'
                />
              </div>
              <div className='p-4 bg-white'>
                <h4 className='mb-2 font-semibold text-lg'>{category.title}</h4>
                <p>{category.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className=''>
        <ShapeOne fill='#F8EBE6' />
      </div>
    </div>
  );
};
export default Techniques;
