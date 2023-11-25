import Container from '../../../components/container/Container';
import AddToCart from './addToCart/AddToCart';
import { getSingleProduct } from '@/lib/products';
import Recommendations from './recommendations/Recommendations';
import { Product } from '@prisma/client';
import { prisma } from '@/lib/prisma';
import Carousel from './carousel/Carousel';
import AddToFavorites from '../../../components/addToFavorites/AddToFavorites';

const SingleProduct = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  const product = (await getSingleProduct(id)) as Product;
  const allProducts = await prisma.product.findMany();

  const sameCategoryProducts = allProducts.filter(
    (p) => p.category === product.category && p.id !== product.id,
  );

  const otherProducts = allProducts
    .filter((p) => p.category !== product.category && p.id !== product.id)
    .slice(0, 8);

  return (
    <>
      <Container classes="items-center justify-between pb-4 mt-6 sm:mt-12 mb-12 md:mb-20">
        <div className="flex gap-2 pb-10 sm:gap-4 sm:pb-20">
          <div className="flex flex-col gap-4 md:flex-row">
            <Carousel product={product} />
            <article className="flex w-full flex-col gap-2 md:w-[25%] md:gap-6">
              <p className="text-xl font-semibold md:text-2xl">
                € {product.price}{' '}
              </p>
              <p className="text-xl text-neutral-700 sm:text-xl ">
                {product.name}
              </p>
              <p>{product.description}</p>

              <AddToFavorites
                product={product}
                variant="icon"
                buttonClasses="static w-min"
              />
              <AddToCart product={product} />
            </article>
          </div>
        </div>
        <div className="mt-8 sm:mt-12">
          <Recommendations
            products={sameCategoryProducts}
            title={`More from ${product.category.toLowerCase()}`}
          />
        </div>
        <div className="mt-8 sm:mt-12">
          <Recommendations
            products={otherProducts}
            title="Other products you might like"
          />
        </div>
      </Container>
    </>
  );
};
export default SingleProduct;
