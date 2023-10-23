import FooterCTA from '@/app/components/footer/CTA';
import Container from '@/app/components/container/Container';
import { techniques } from '@/app/data/techniques';
import Image from 'next/image';

const SingleTechnique = ({ params: { id } }: { params: { id: string } }) => {
  const technique = techniques.find((technique) => technique.id === Number(id));

  if (!technique) {
    return (
      <Container>{<h4>Sorry, we couldn&apos;t find that one.</h4>}</Container>
    );
  }

  return (
    <>
      <Container classes='pb-20 w-full items-center justify-between py-4 px-2 md:w-full md:px-8 lg:w-full lg:px-8 xl:max-w-[1400px]'>
        <div className='max-w-[1200px] lg:px-20 xl:px-40'>
          <header className='mb-10 '>
            <h1 className='mt-10 mb-4 text-center text-4xl'>
              {technique.name}
            </h1>
            <h4 className='text-center'>{technique.title}</h4>
          </header>
          <main className='flex flex-col items-center gap-4'>
            <Image src={technique.mainImage} alt='main-image' />
            <article>
              <p className='my-10'>{technique.intro}</p>
              {technique.parts.map((part, index) => (
                <div key={index} className='mb-10 flex flex-col items-center'>
                  <Image src={part.image} alt={`image-${technique.id}`} />
                  <section className='mt-10'>
                    {part.texts.map((text, index) => (
                      <p key={index}>{text?.text}</p>
                    ))}
                  </section>
                </div>
              ))}
            </article>
          </main>
        </div>
      </Container>
      <FooterCTA />
    </>
  );
};
export default SingleTechnique;
