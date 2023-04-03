"use client";

import { ImageObj, mockProduct } from "@/mockProduct/mockProduct";
import Image, { StaticImageData } from "next/image";
import ProductHandler from "./handler";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

const MockProduct = () => {
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [mainImage, setMainImage] = useState<ImageObj>(mockProduct.images[0]);

  const handleImageMouseOver = (event: React.MouseEvent<HTMLImageElement>) => {
    setIsMouseOver(true);
    const x = event.clientX - event.currentTarget.offsetLeft;
    const y = event.clientY - event.currentTarget.offsetTop;
    setZoomPosition({ x, y });
  };

  const handleMouseLeave = (event: React.MouseEvent<HTMLImageElement>) => {
    setIsMouseOver(false);
    setZoomPosition({ x: 0, y: 0 });
  };

  const handleImageChange = (id: number) => {
    const selected = mockProduct.images.find((image) => image.id === id);
    if (selected) setMainImage(selected);
  };

  return (
    <div className="flex gap-8 justify-center pt-40">
      <aside className="flex flex-col gap-4 shrink-0">
        {mockProduct.images.map((image) => (
          <Image
            key={image.id}
            src={image.image}
            alt=""
            width={60}
            height={60}
            onClick={() => handleImageChange(image.id)}
          />
        ))}
      </aside>
      <div
        style={{
          position: "relative",
          width: "400px",
          height: "400px",
          flexShrink: 0,
          overflow: "hidden",
        }}
        onMouseMove={handleImageMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          src={mainImage.image}
          alt=""
          style={{
            transformOrigin: `${zoomPosition.x}px ${zoomPosition.y}px`,
            transform: isMouseOver ? "scale(2)" : "scale(1)",
          }}
        />
      </div>
      <article className="flex flex-col gap-5">
        <h1 className="text-3xl">{mockProduct.name}</h1>
        <p>{mockProduct.category}</p>
        <p>{mockProduct.description}</p>
        <p className="text-3xl my-4">{mockProduct.price} € </p>

        <ProductHandler product={mockProduct} />
      </article>
    </div>
  );
};
export default MockProduct;
