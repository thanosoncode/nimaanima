import Image from "next/image";
import Container from "@/app/components/Container";
import { Product } from "@/app/utils/models";

const getProduct = async (id: string) => {
  const response = await fetch(`http://localhost:3000/api/products/${id}`);

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
      <div className="flex justify-center gap-8 pt-40">
        <article className="flex flex-col gap-5">
          <h1 className="text-3xl">{product.name}</h1>
          <p>{product.description}</p>
          <p className="my-4 text-3xl">{product.price} € </p>
        </article>
      </div>
    </Container>
  );
};
export default SingleProduct;
