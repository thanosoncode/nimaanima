import Image from "next/image";
import { Product } from "../utils/models";
import Link from "next/link";

const Products = async () => {
  const response = await fetch("http://localhost:3000/api/products", {
    cache: "reload",
    next: { revalidate: 60 },
  });
  const products = (await response.json()) as Product[];

  return (
    <>
      <main className="relative h-full overflow-y-hidden">
        <h4 className="py-4">Products</h4>
        <div className="flex gap-4 flex-wrap justify-center">
          {products.map((product) => (
            <div key={product.id}>
              <Link
                href={`/products/${product.id}`}
                className="relative h-64 w-96"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={100}
                  height={100}
                />
              </Link>
              <div className="p-2 flex justify-between ">
                <div>
                  <p className="">{product.name}</p>
                  <p className="">{product.price}€</p>
                </div>
                <p>Add to cart</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};
export default Products;
