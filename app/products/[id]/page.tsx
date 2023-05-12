import Container from "@/app/components/Container";
import ProductHandler from "../components/ProductHandler";
import AddToCart from "../components/AddToCart";
import { getSingleProduct } from "@/lib/products";
import { Product } from "@/app/utils/models";
import FooterCTA from "@/app/components/FooterCTA";

const SingleProduct = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  const product = (await getSingleProduct(id)) as Product;

  return (
    <>
      <Container classes="w-full items-center justify-between py-4 px-2 md:w-full md:px-8 lg:w-full lg:px-8 xl:max-w-[1400px]">
        <div className="flex flex-col items-center justify-center gap-8 pt-24 pb-32 lg:flex-row">
          <ProductHandler product={product} />
          <article className="ml-12 flex w-80 flex-col gap-6 sm:ml-12 sm:w-[400px] md:ml-12 md:w-[600px] lg:max-w-sm">
            <p className="">{product.name}</p>
            <p className="text-2xl">€ {product.price} </p>
            <p>{product.description}</p>
            <AddToCart product={product} />
          </article>
        </div>
      </Container>
      <FooterCTA />
    </>
  );
};
export default SingleProduct;
