import Container from '../../../components/container/Container';
import AddToCart from './addToCart/AddToCart';
import Link from 'next/link';
import HandleProduct from './handleProduct/HandleProduct';
import { getSingleProduct } from '@/lib/products';
import Recommendations from './recommendations/Recommendations';
import { Product } from '@prisma/client';

const SingleProduct = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  const product = (await getSingleProduct(id)) as Product;

  return (
    <>
      <Container classes='w-full items-center justify-between py-4 px-2 md:w-full md:px-8 lg:w-full lg:px-8 xl:max-w-[1140px] mt-8  md:mt-12 mb-12 md:mb-20'>
        <div className='flex gap-2 sm:gap-4'>
          <div className='flex flex-col gap-4 md:flex-row'>
            <HandleProduct product={product} />
            <article className='flex w-full flex-col gap-2 md:gap-6 md:w-[25%]'>
              <p className='text-xl md:text-2xl font-semibold'>
                € {product.price}{' '}
              </p>
              <p className=' text-xl sm:text-xl text-neutral-700 '>
                {product.name}
              </p>
              <p>{product.description}</p>

              <Link
                href='/techniques/3'
                className=' w-min px-1 whitespace-nowrap border-b   block text-neutral-600  border-b-neutral-600'
              >
                Weaving technique
              </Link>
              <AddToCart product={product} />
            </article>
          </div>
        </div>
        <div className='mt-12 '>
          <Recommendations category={product.category} currentId={id} />
        </div>
      </Container>
    </>
  );
};
export default SingleProduct;
