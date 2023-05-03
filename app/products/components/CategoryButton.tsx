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
        className={`h-20 w-20 overflow-hidden rounded-full  duration-300 ease-in-out ${
          isHovered || isActive ? "scale-110" : ""
        }`}
      >
        <Image
          src={category.image}
          alt={category.name}
          className="h-20 w-20 object-cover"
        />
      </div>
      <p
        className={`px-2 pb-1 text-sm duration-300 ease-in-out ${
          isActive ? "border-b border-black" : "border-b border-lightGreen-400"
        }`}
      >
        {category.name}
      </p>
    </div>
  );
};
export default CategoryButton;
