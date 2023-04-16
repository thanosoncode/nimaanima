"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Product } from "@/app/utils/models";
import arrowBlock from "../../../public/assets/left-black-arrow.png";

interface ProductHandlerProps {
  product: Product;
}

const ProductHandler: React.FC<ProductHandlerProps> = ({ product }) => {
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [selectedImageINdex, setSelectedImageIndex] = useState(0);

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

  const handleNextImageClick = () => {
    if (selectedImageINdex < product.images.length - 1) {
      setSelectedImageIndex((prev) => prev + 1);
    } else {
      setSelectedImageIndex(0);
    }
  };

  const handlePreviousImageClick = () => {
    if (selectedImageINdex > 0) {
      setSelectedImageIndex((prev) => prev - 1);
    } else {
      setSelectedImageIndex(product.images.length - 1);
    }
  };

  return (
    <>
      <section className="mr-16 flex gap-4">
        <aside className="flex shrink-0 flex-col gap-4">
          {product.images.map((image, index) => (
            <div key={index}>
              <Image
                key={index}
                src={image}
                alt=""
                width={60}
                height={60}
                // onClick={() => handleImageChange(image.id)}
              />
            </div>
          ))}
        </aside>
        <div
          style={{
            position: "relative",
            width: "640px",
            height: "480px",
            flexShrink: 0,
            overflow: "hidden",
          }}
          onMouseMove={handleImageMouseOver}
          onMouseLeave={handleMouseLeave}
        >
          <div
            onClick={handlePreviousImageClick}
            className="absolute top-1/2 left-4 z-10 flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full  bg-white duration-200 ease-in-out hover:bg-neutral-100"
          >
            <Image
              src={arrowBlock}
              alt="left-arrow"
              width={20}
              height={20}
              className=""
            />
          </div>
          <div
            onClick={handleNextImageClick}
            className="absolute top-1/2 right-4 z-10 flex h-12 w-12 -translate-y-1/2 rotate-180 cursor-pointer items-center justify-center rounded-full bg-white duration-200 ease-in-out hover:bg-neutral-100"
          >
            <Image
              src={arrowBlock}
              alt="right-arrow"
              width={20}
              height={20}
              className=""
            />
          </div>
          <Image
            src={product.images[selectedImageINdex]}
            alt=""
            width={480}
            height={640}
            style={{
              transformOrigin: `${zoomPosition.x}px ${zoomPosition.y}px`,
              transform: isMouseOver ? "scale(2)" : "scale(1)",
              width: "640px",
              height: "480px",
            }}
          />
        </div>
      </section>
    </>
  );
};
export default ProductHandler;
