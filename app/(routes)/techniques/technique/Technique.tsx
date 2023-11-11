import Image from 'next/image';
import Link from 'next/link';
import RowCarousel from '@/app/components/rowCarousel/RowCarousel';

import { TechniqueData } from '@/app/utils/types';

const Technique = (props: TechniqueData) => {
  return (
    <div className='mt-12 mb-20'>
      <header className='xl:max-w-[1140px] mx-auto px-2 lg:px-8 mb-16'>
        <h1 className='text-6xl font-thin mb-8'>{props.header.title}</h1>
        <div className='relative w-full h-[460px] '>
          <Image
            src={props.header.image.src}
            alt={props.header.image.alt}
            fill
            className='object-cover'
            sizes='(min-width: 1280px) 1076px, 95vw'
            placeholder='blur'
            priority
          />
        </div>
      </header>
      <main className='grid grid-cols-1 gap-12 xl:max-w-[1140px] mx-auto px-2 lg:px-8'>
        {props.steps.map((step, index) => (
          <article
            key={index}
            className={`flex ${
              index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
            }  gap-12 p-2 items-center`}
          >
            <div className='w-1/2 text-center'>
              <h3 className='text-2xl font-semibold mb-4'>{step.info.title}</h3>
              <p>{step.info.text}</p>
            </div>
            <div className='relative w-1/2 h-[280px] rounded-lg overflow-hidden'>
              <Image
                src={step.image.src}
                alt={step.image.alt}
                fill
                className='object-cover'
                sizes='(min-width: 1280px) 498px, (min-width: 1040px) calc(50vw - 72px), calc(50vw - 48px)'
                placeholder='blur'
              />
            </div>
          </article>
        ))}
        <article>
          <div className='rounded-lg  text-lg text-center bg-lightPink-400  py-4 px-12 mx-auto my-12'>
            <h3 className='text-2xl font-semibold pb-6 text-center'>
              {props.footer.title}
            </h3>
            <div className='flex flex-col gap-4'>
              <p>{props.footer.text}</p>
              <p>
                If you&apos;re looking for a personalized touch{' '}
                <Link href='/contact' className='font-bold underline'>
                  let us know
                </Link>{' '}
                and we&apos;ll craft a custom creation just for you
              </p>
            </div>
          </div>
        </article>
        <RowCarousel
          title={props.rowCarousel.title}
          items={props.rowCarousel.products}
        />
      </main>
    </div>
  );
};

export default Technique;
