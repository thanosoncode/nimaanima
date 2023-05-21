"use client";

import { useAppDispatch, useAppState } from "@/app/context";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

interface CategoryButtonProps {
  category: {
    id: number;
    name: string;
    image: StaticImageData;
  };
}

const CategoryButton: React.FC<CategoryButtonProps> = ({ category }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { selectedCategory } = useAppState();
  const dispatch = useAppDispatch();
  const handleCategoryClick = (category: string) => {
    dispatch({ type: "SET_SELECTED_CATEGORY", category });
  };

  const isActive = selectedCategory === category.name;

  return (
    <div
      className="flex cursor-pointer flex-col items-center justify-center gap-2"
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => handleCategoryClick(category.name)}
    >
      <div
        className={`h-14 w-14 overflow-hidden rounded-full duration-300 ease-in-out  sm:h-20 sm:w-20 ${
          isHovered || isActive ? "scale-110" : ""
        }`}
      >
        <Image
          src={category.image}
          alt={category.name}
          className="h-14 w-14  object-cover sm:h-20 sm:w-20"
        />
      </div>
      <p
        className={`px-0 pb-1 text-sm duration-300 ease-in-out sm:px-2  ${
          isActive ? "border-b border-black" : "border-b border-lightGreen-400"
        }`}
      >
        {category.name}
      </p>
    </div>
  );
};
export default CategoryButton;
