import Image from 'next/image';
import neckless from '../../../../public/assets/necklace.svg';

const Empty = () => {
  return (
    <div className='flex justify-center items-center flex-col'>
      <div className='bg-neutral-200 w-48 h-48 rounded-full flex justify-center items-center mb-4'>
        <div className='relative w-36 h-32'>
          <Image alt='neckless' src={neckless} fill />
        </div>
      </div>
      <p className='font-medium text-xl mb-2'>Nothing here yet</p>
      <p className='text-lg max-w-[360px] text-center text-neutral-600'>
        These are a few of your favorite things... or they will be, once you
        favorite something.
      </p>
    </div>
  );
};

export default Empty;
