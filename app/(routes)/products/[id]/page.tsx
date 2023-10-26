import Container from '../../../components/container/Container';
import AddToCart from './addToCart/AddToCart';
import Link from 'next/link';
import HandleProduct from './handleProduct/HandleProduct';
import { getSingleProduct } from '@/lib/products';
import { Product } from '@/app/utils/types';
import Recommendations from './recommendations/Recommendations';

const SingleProduct = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  const product = (await getSingleProduct(id)) as Product;

  return (
    <>
      <Container classes='w-full items-center justify-between py-4 px-2 md:w-full md:px-8 lg:w-full lg:px-8 xl:max-w-[1140px] mt-12 mb-20'>
        <div className='flex gap-2 sm:gap-4'>
          <div className='flex flex-col gap-4 sm:flex-row'>
            <HandleProduct product={product} />
            <article className='flex w-full flex-col gap-6 sm:w-[25%]'>
              <p className=' text-xl sm:text-3xl'>{product.name}</p>
              <p>{product.description}</p>
              <p className='text-xl sm:text-2xl'>€ {product.price} </p>
              <Link href='/techniques/3'>Weaving technique</Link>
              <AddToCart product={product} />
            </article>
          </div>
        </div>
        <div className='mt-20'>
          <Recommendations category={product.category} currentId={id} />
        </div>
      </Container>
    </>
  );
};
export default SingleProduct;
