import { getSigleProduct } from "@/lib/getSingleProuduct";
import Image from "next/image";
import ProductHandle from "./productHandle";

const SingleProduct = async ({
  params: { productId },
}: {
  params: { productId: string };
}) => {
  const product = await getSigleProduct(productId);

  if (!product) {
    return "getting product";
  }
  return (
    <div className="p-4 bg-white w-3/4">
      <div className="flex gap-8">
        <div className="relative">
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={300}
          />
        </div>
        <div>
          <div className="flex flex-col gap-8 pt-8">
            <h4 className="text-3xl">{product.name}</h4>
            <p className="mb-12"> {product.description}</p>
            <p className="text-3xl">{product.price} €</p>
          </div>
          <ProductHandle product={product} />
        </div>
      </div>
    </div>
  );
};
export default SingleProduct;
