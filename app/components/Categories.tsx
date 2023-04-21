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
      <div className="flex gap-4">
        {categories.map((category) => (
          <div
            className="border-gray w-80 overflow-hidden rounded-xl border hover:shadow-md"
            key={category.name}
            onClick={() => handleCategoryClick(category.name)}
          >
            <Link href={`/products`}>
              <div className="h-60 w-80">
                <Image
                  src={category.image}
                  alt={category.name}
                  width={320}
                  height={240}
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="p-4 text-center">{category.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Categories;
