import Link from 'next/link';
import Container from '../../components/container/Container';
import { techniques } from '../../data/techniques';
import Image from 'next/image';
import FooterCTA from '../../components/footer/cta/CTA';
import Article from './Article';
import Header from './Header';

const Techniques = () => {
  return (
    <>
      <Header />
      <div className='mx-auto mt-24 mb-12 max-w-[1200px] px-0 sm:px-8'>
        <Article />
      </div>
      <Container classes='pb-24 pt-24 lg:px-8 lg:w-full xl:max-w-[1200px] md:w-full md:px-8 w-full px-8 mb-40'>
        <section className='grid gap-y-24 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3'>
          {techniques.map((technique) => (
            <article
              key={technique.id}
              className='hover:shadow-2lg overflow-hidden rounded-xl border border-neutral-300 shadow-lg duration-300 ease-in-out'
            >
              <div className='relative p-0 sm:p-0 sm:p-8'>
                <Image
                  src={technique.mainImage}
                  alt={technique.name}
                  className='w-full max-h-[300px]'
                />
              </div>
              <section className='p-5'>
                <Link href={`/techniques/${technique.id}`} className='block'>
                  <h4 className='mb-2 font-bold hover:underline'>
                    {technique.name}
                  </h4>{' '}
                </Link>

                <p className='font-light'>{technique.title}</p>
              </section>
            </article>
          ))}
        </section>
      </Container>
    </>
  );
};
export default Techniques;
