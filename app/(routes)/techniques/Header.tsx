import Image from 'next/image';

const Header = () => {
  return (
    <header className='relative mb-10 bg-lightPink-400 sm:mb-28'>
      <div className=' flex h-full  w-full flex-row items-start justify-center gap-8 px-4 py-4  sm:left-0 sm:flex-row sm:items-center  sm:justify-center sm:gap-12 '>
        <div className='flex flex-col items-start justify-start gap-0 sm:items-center  sm:justify-center sm:gap-2'>
          <p className='text-center text-[20px] font-light leading-normal tracking-wide md:text-2xl'>
            Explore the techniques
          </p>
          <p className='text-center text-[20px] font-light leading-normal tracking-wide md:text-2xl'>
            behind our
          </p>
          <p className='text-center text-[20px] font-light leading-normal tracking-wide md:text-2xl'>
            handcrafted pieces
          </p>
        </div>
        {/* <div className='grid grid-cols-2 grid-rows-2 gap-2 sm:flex sm:gap-4 '>
          <div className='relative h-14 w-14 overflow-hidden rounded-full sm:h-14 sm:w-14 md:h-16 md:w-16'>
            <Image src={t1} alt='' fill />
          </div>
          <div className='relative h-14 w-14 overflow-hidden rounded-full sm:h-14 sm:w-14 md:h-16 md:w-16'>
            <Image src={t2} alt='' fill />
          </div>

          <div className='relative h-14 w-14 overflow-hidden rounded-full sm:h-14 sm:w-14 md:h-16 md:w-16'>
            <Image src={t4} alt='' fill />
          </div>
          <div className='relative h-14 w-14 overflow-hidden rounded-full sm:h-14 sm:w-14 md:h-16 md:w-16'>
            <Image src={t3} alt='' fill />
          </div>
        </div> */}
      </div>
    </header>
  );
};
export default Header;
