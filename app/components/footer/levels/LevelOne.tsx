import ShapeThree from '../../svg/ShapeThree';

const FooterLevelOne = () => {
  return (
    <div>
      <div className='bg-white h-10 w-full relative '>
        <div className='absolute inset-0 rotate-180'>
          <ShapeThree fill='#4D6BC6' />
        </div>
      </div>
      <div className='pb-2   flex justify-center bg-someBlue-500'>
        <span className='text-center text-white  '>
          Every product is 100% handmade.
        </span>
      </div>
    </div>
  );
};
export default FooterLevelOne;
