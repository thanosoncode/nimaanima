import { Product } from "@/app/utils/types";
import { getCategoryProducts } from "@/lib/products";
import React from "react";
import ProductItem from "./productItem/ProductItem";

interface RecommendationsProps {
  category: string;
  currentId: string;
}

const Recommendations = async ({
  category,
  currentId,
}: RecommendationsProps) => {
  const products = (await getCategoryProducts(category)) as Product[];

  const filtered = products.filter((p) => p.id !== currentId);

  return (
    <div className="py-4">
      <h3 className="mb-3 text-xl font-light">More from {category}</h3>
      <section className="grid grid-cols-2    gap-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xs:grid-cols-3">
        {filtered.map((product) => (
          <div key={product.id}>
            <ProductItem product={product} key={product.id} />
          </div>
        ))}
      </section>
    </div>
  );
};

export default Recommendations;
