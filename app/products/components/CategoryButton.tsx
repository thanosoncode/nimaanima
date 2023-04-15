"use client";

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

  return (
    <div
      className="flex flex-col items-center justify-center gap-2"
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`h-28 w-28 overflow-hidden rounded-full border border-gray-300 duration-300 ease-in-out ${
          isHovered ? "scale-110" : ""
        }`}
      >
        <Image
          src={category.image}
          alt={category.name}
          className="h-28 w-28 object-fill"
        />
      </div>
      <p
        className={`px-2 pb-1 duration-300 ease-in-out ${
          isHovered ? "border-b border-black" : "border-b border-white"
        }`}
      >
        {category.name}
      </p>
    </div>
  );
};
export default CategoryButton;
