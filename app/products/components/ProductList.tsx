"use client";
import { useAppState } from "@/app/context";
import { Product } from "../../utils/models";
import Image from "next/image";
import Link from "next/link";
import Filter from "./Filter";
import { useEffect, useState } from "react";

interface ProductsProps {
  products: Product[];
  filterByCategory: boolean;
  title: string;
  showFilter: boolean;
}

const ProductList: React.FC<ProductsProps> = ({
  products,
  filterByCategory,
  title,
  showFilter,
}) => {
  const { selectedCategory } = useAppState();

  const filteredProducts = products.filter((product) =>
    selectedCategory ? product.category === selectedCategory : product
  );

  const productsToShow = filterByCategory ? filteredProducts : products;

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleSize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleSize);
    return () => window.removeEventListener("resize", handleSize);
  }, []);

  return (
    <main>
      <div className="flex justify-between">
        <h4 className="mb-4 text-2xl font-light">{title}</h4>
        {showFilter ? <Filter /> : null}
      </div>
      <section
        style={{
          display: "grid",
          gridTemplateColumns:
            width < 640
              ? "repeat(2, minmax(160px, 1fr))"
              : "repeat(auto-fill, minmax(240px, 0.4fr))",
          gridAutoRows:
            width < 640 ? "minmax(160px, auto)" : "minmax(200px, auto)",
          justifyContent: "center",
          gap: "80px 20px",
        }}
      >
        {productsToShow.map((product) => (
          <div key={product.name}>
            <Link
              href={`/products/${product.id}`}
              style={{
                maxWidth: "100%",
                position: "relative",
                height: "100%",
                display: "block",
              }}
            >
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="rounded-xl object-cover"
              />
            </Link>
            <Link
              href={`/products/${product.id}`}
              style={{ display: "block", padding: "4px" }}
            >
              <p className="text-sm font-semibold">{product.name}</p>
              <p className="text-sm">€ {product.price}</p>
            </Link>
          </div>
        ))}
      </section>
    </main>
  );
};
export default ProductList;
