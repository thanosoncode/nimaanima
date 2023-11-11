import Link from 'next/link';
import Container from '../../container/Container';
import ShapeTwo from '../../svg/ShapeTwo';
import ShapeThree from '../../svg/ShpaeThree';
import ShapeOne from '../../svg/ShapeOne';

const FooterCTA = () => {
  return (
    <div>
      <ShapeTwo fill='#D7E6F5' />
      <div className='bg-someBlue-400'>
        <div className='-mt-1 flex flex-col items-center justify-center gap-4 py-3 bg-LightBlueWave'>
          <h4 className='font-medium px-8 text-center '>
            Connect with us to explore your concepts or request tailored items
          </h4>
          <button className='rounded-full border border-neutral-400 bg-white py-2 px-5 font-semibold duration-200 ease-in-out hover:scale-105'>
            <Link href='/contact'>Get in touch!</Link>
          </button>
        </div>
      </div>
      <div className='bg-someBlue-400'>
        <div className='rotate-180 '>
          <ShapeThree fill='#4D6BC6' />
        </div>
        <div className='bg-someBlue-500'>
          <Container classes='pb-2.5 pt-1 flex justify-center'>
            <span className='text-center text-white border-b border-dotted border-white '>
              Every product is 100% handmade.
            </span>
          </Container>
        </div>
      </div>
    </div>
  );
};
export default FooterCTA;
