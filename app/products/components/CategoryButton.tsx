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
      className="flex flex-col gap-2 justify-center items-center"
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`w-24 h-24 overflow-hidden rounded-full ease-in-out duration-300 border border-gray-300 ${
          isHovered ? "scale-110" : ""
        }`}
      >
        <Image
          src={category.image}
          alt={category.name}
          className="object-fill w-24 h-24"
        />
      </div>
      <p
        className={`px-2 pb-1 ease-in-out duration-300 ${
          isHovered ? "border-b border-black" : "border-b border-white"
        }`}
      >
        {category.name}
      </p>
    </div>
  );
};
export default CategoryButton;
