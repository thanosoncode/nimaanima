import Container from "@/app/components/Container";
import ProductHandler from "../components/ProductHandler";
import AddToCart from "../components/AddToCart";

const url =
  process.env.NODE_ENV === "production" ? "" : "http://localhost:3000";

const getProduct = async (id: string) => {
  const response = await fetch(`${url}/api/products/${id}`);

  return response.json();
};

const SingleProduct = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  const product = await getProduct(id);

  return (
    <Container>
      <div className="flex gap-8 pt-40">
        <ProductHandler product={product} />
        <article className="flex w-80 flex-col gap-6 ">
          <p className="text-2xl">€{product.price} </p>
          <p className="">{product.name}</p>
          <p>{product.description}</p>
          <AddToCart product={product} />
        </article>
      </div>
    </Container>
  );
};
export default SingleProduct;
