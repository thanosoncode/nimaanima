"use client";

import Image from "next/image";
import Link from "next/link";
import { useAppDispatch } from "../context";
import { categories } from "../data/categories";

const Categories = () => {
  const dispatch = useAppDispatch();
  const handleCategoryClick = (category: string) => {
    dispatch({ type: "SET_SELECTED_CATEGORY", category });
  };
  return (
    <section>
      <h4 className="py-4 text-3xl">Shop our awesome gift categories</h4>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 0.8fr))",
          gridAutoRows: "minmax(180px, auto)",
          gap: "20px",
        }}
      >
        {categories.map((category) => (
          <Link
            key={category.name}
            href={`/products`}
            onClick={() => handleCategoryClick(category.name)}
            style={{
              maxWidth: "100%",
              position: "relative",
              height: "100%",
              display: "block",
            }}
          >
            <Image
              src={category.image}
              alt={category.name}
              fill
              className=" rounded-2xl object-cover"
            />
          </Link>
        ))}
      </div>
    </section>
  );
};
export default Categories;
