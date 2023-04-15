"use client";

import React, { useState } from "react";
import Image from "next/image";

const ProductHandler = () => {
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [isMouseOver, setIsMouseOver] = useState(false);

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
  return (
    <>
      <aside className="flex shrink-0 flex-col gap-4">
        {product.images.map((image, index) => (
          <div>
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
          width: "400px",
          height: "400px",
          flexShrink: 0,
          overflow: "hidden",
        }}
        onMouseMove={handleImageMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          src={product.images[0]}
          alt=""
          style={{
            transformOrigin: `${zoomPosition.x}px ${zoomPosition.y}px`,
            transform: isMouseOver ? "scale(2)" : "scale(1)",
            width: "400px",
            height: "400px",
          }}
        />
      </div>
    </>
  );
};
export default ProductHandler;
