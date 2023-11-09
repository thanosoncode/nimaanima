import Image from 'next/image';
import legs from '../../../../public/assets/techniques/dolls/amiguri-crochet-legs.jpg';
import body1 from '../../../../public/assets/techniques/dolls/amiguri-crochet-doll-body.jpg';
import body2 from '../../../../public/assets/techniques/dolls/amiguri-crochet-doll-body-2.jpg';
import results from '../../../../public/assets/techniques/dolls/amiguri-crochet-dolls-2.jpg';
import materials from '../../../../public/assets/techniques/dolls/amiguri-crochet-doll-materials.jpeg';
import header from '../../../../public/assets/techniques/dolls/dolls-header.webp';
import footer from '../../../../public/assets/techniques/dolls/footer.jpeg';
import Link from 'next/link';
import Recommendations from '../../products/[id]/recommendations/Recommendations';
import { getCategoryProducts } from '@/lib/products';
import RowCarousel from '@/app/components/rowCarousel/RowCarousel';
import { Product } from '@prisma/client';

const Dolls = async () => {
  const items = (await getCategoryProducts('Dolls')) as Product[];

  return (
    <div className='mt-12 mb-20'>
      <header className='xl:max-w-[1140px] mx-auto px-2 lg:px-8 mb-24'>
        <h1 className='text-6xl font-thin mb-8'>Amigurumi crochet dolls</h1>
        <div className='relative w-full h-[460px] '>
          <Image src={header} alt='doll-legs' fill className='object-cover' />
        </div>
      </header>
      <main className='grid grid-cols-1 gap-16 xl:max-w-[1140px] mx-auto px-2 lg:px-8'>
        <article className='grid grid-cols-2 gap-16 p-2 items-center'>
          <div>
            <h3 className='text-2xl font-semibold mb-4'>What we use</h3>
            <p>
              To create an amigurumi doll, we use yarn, a crochet hook, a yarn
              needle, and stitch markers. These essential tools, along with our
              creativity and passion, come together to bring our amigurumi
              creations to life.
            </p>
          </div>
          <div className='relative w-full h-[280px] rounded-lg overflow-hidden'>
            <Image src={materials} alt='doll-legs' fill />
          </div>
        </article>
        <article className='grid grid-cols-2 gap-16 p-2 items-center  '>
          <div className='relative w-full h-[280px] rounded-lg overflow-hidden'>
            <Image src={legs} alt='doll-legs' fill />
          </div>
          <div>
            <h3 className='text-2xl font-semibold mb-4'>
              Creating and joining the dolls legs
            </h3>
            <p>
              We crochet the doll from the feet up, creating each foot with a
              magic ring and working in rows of increases and single crochets.
              After stuffing the foot, we continue with the leg, making a
              cylinder with 18 rows of 8 single crochets. We add stuffing every
              six rounds and leave a yarn tail at the end. Once both legs are
              done, we join them together, using a few single crochets, six
              chain stitches, and working around the second leg.
            </p>
          </div>
        </article>
        <article className='grid grid-cols-2 gap-16 p-2 items-center'>
          <div>
            <h3 className='text-2xl font-semibold mb-4'>
              Crochet the Torso and Head
            </h3>
            <p>
              We work from the connected set of legs, creating the torso by
              stitching around the fabric perimeter with a series of increases
              and decreases to form the body's natural curves. As we progress,
              we add fiberfill stuffing. We experiment with proportions to
              achieve our desired look, whether it's a realistic or cute
              'kawaii' style. We reinforce the neck with cotton swabs for
              structure, stuff the head with fiberfill, and then embroider
              facial features like a nose, smile, and eyes.
            </p>
          </div>
          <div className='relative w-full h-[280px] rounded-lg overflow-hidden'>
            <Image src={body1} alt='doll-legs' fill />
          </div>
        </article>
        <article className='grid grid-cols-2 gap-16 p-2 items-center'>
          <div className='relative w-full h-[280px] rounded-lg overflow-hidden'>
            <Image src={body2} alt='doll-legs' fill />
          </div>
          <div>
            <h3 className='text-2xl font-semibold mb-4'>Adding arms</h3>
            <p>
              Each of the arms also begins with a magic ring. Then, we increase
              slightly and then add 12 rows of 5 single crochets. We end up with
              a long, cylindrical arm. Once we crochet both arms, we attach them
              using yarn and a yarn needle.
            </p>
          </div>
        </article>
        <article className='grid grid-cols-2 gap-16 p-2 items-center'>
          <div>
            <h3 className='text-2xl font-semibold mb-4'>Customizing</h3>
            <p>
              Now is the fun part! With the foundation of our amigurumi doll
              complete, we can focus on customizing it. What type and color of
              hair will it have? What will it wear? Will it carry a purse or
              wear flowers in its hair? It's up to the imagination.
            </p>
          </div>
          <div className='relative w-full h-[280px] rounded-lg overflow-hidden'>
            <Image src={results} alt='doll-legs' fill />
          </div>
        </article>
        <article>
          <div className=' rounded-lg  text-lg text-center bg-lightPink-400  py-4 px-12 mx-auto'>
            <h3 className='text-2xl font-semibold pb-6 text-center'>
              Custom Crafted Treasures
            </h3>
            <div className='flex flex-col gap-4'>
              <p>
                Each amigurumi doll we create is unique, lovingly handcrafted
                with care and attention to detail. No two dolls are alike,
                making each one as special as the person who adopts it.
              </p>
              <p>
                If you're looking for a personalized touch{' '}
                <Link href='/contact' className='font-bold underline'>
                  let us know
                </Link>{' '}
                and we'll craft a custom creation just for you
              </p>
            </div>
          </div>
        </article>
        <RowCarousel title='Check out our collection' items={items} />
      </main>
    </div>
  );
};

export default Dolls;
