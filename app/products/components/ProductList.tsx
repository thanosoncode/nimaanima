import { Product } from "../../utils/models";
import Image from "next/image";
import Link from "next/link";

interface ProductsProps {
  products: Product[];
}

const ProductList: React.FC<ProductsProps> = ({ products }) => {
  return (
    <main className="py-32">
      <h4 className="mb-4  text-2xl">Find something you love</h4>
      <section className="flex flex-wrap gap-x-10 gap-y-16">
        {products.map((product) => (
          <div
            className="h-40 w-60 shrink-0 hover:shadow-lg"
            key={product.name}
          >
            <Link href={`/products/${product.id}`}>
              <Image
                src={product.images[0]}
                alt={product.name}
                width={240}
                height={160}
                className="h-full w-full object-cover duration-300 ease-in-out hover:scale-105"
              />

              <p className="">{product.name}</p>

              <p>€{product.price}</p>
            </Link>
          </div>
        ))}
      </section>
    </main>
  );
};
export default ProductList;
