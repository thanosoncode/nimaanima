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
      <Container classes="items-center justify-between pb-4 mt-6 sm:mt-12 mb-12 md:mb-20">
        <div className="flex gap-2 sm:gap-4">
          <div className="flex flex-col gap-4 md:flex-row">
            <HandleProduct product={product} />
            <article className="flex w-full flex-col gap-2 md:w-[25%] md:gap-6">
              <p className="text-xl font-semibold md:text-2xl">
                € {product.price}{' '}
              </p>
              <p className="text-xl text-neutral-700 sm:text-xl ">
                {product.name}
              </p>
              <p>{product.description}</p>

              <Link
                href="/techniques/3"
                className="block w-min whitespace-nowrap border-b border-b-neutral-600 px-1 text-neutral-600"
              >
                Weaving technique
              </Link>
              <AddToCart product={product} />
            </article>
          </div>
        </div>
        <div className="mt-8 sm:mt-12">
          <Recommendations category={product.category} currentId={id} />
        </div>
      </Container>
    </>
  );
};
export default SingleProduct;
