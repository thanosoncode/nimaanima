import { Product } from "../../utils/models";
import Image from "next/image";
import Link from "next/link";

interface ProductsProps {
  products: Product[];
}

const Products: React.FC<ProductsProps> = ({ products }) => {
  return (
    <main className="pt-32">
      <h4 className="text-2xl  mb-4">Find something you love</h4>
      <section
        style={{
          display: "grid",
          gap: "20px",
          gridTemplateColumns: "repeat(auto-fill, 256px)",
        }}
      >
        {products.map((product) => (
          <div className="shrink-0 w-64 h-64" key={product.id}>
            <Image
              src={product.image}
              alt={product.name}
              width={100}
              height={100}
            />

            <Link href={`/products/${product.category}/${product.id}`}>
              <p className="">{product.name}</p>
            </Link>
            <p>€{product.price}</p>
          </div>
        ))}
      </section>
    </main>
  );
};
export default Products;
