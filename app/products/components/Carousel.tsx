"use client";

import React from "react";
import Image from "next/image";
import { Product } from "@/app/utils/models";
import arrowLeft from "../../../public/assets/left-black-arrow.png";
import arrowRight from "../../../public/assets/right-black-arrow.png";
import closeIcon from "../../../public/assets/window-close.png";

interface CarouselProps {
  width: number;
  height: number;
  product: Product;
  selectedImageINdex: number;
  setSelectedImageIndex: React.Dispatch<React.SetStateAction<number>>;
  onClick?: () => void;
  onClose?: () => void;
}

const Carousel: React.FC<CarouselProps> = ({
  product,
  onClick,
  selectedImageINdex,
  setSelectedImageIndex,
  width,
  height,
  onClose,
}) => {
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
    <div
      style={{
        position: "relative",
        width: width + "px",
        height: height + "px",
        flexShrink: 0,
        overflow: "hidden",
      }}
    >
      <div
        onClick={handlePreviousImageClick}
        className="absolute top-1/2 left-8 z-10 flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full  bg-white shadow-lg duration-200 ease-in-out hover:bg-neutral-100"
      >
        <Image
          src={arrowLeft}
          alt="left-arrow"
          width={20}
          height={20}
          className=""
        />
      </div>
      <div
        onClick={handleNextImageClick}
        className="absolute top-1/2 right-8 z-10 flex h-12 w-12 -translate-y-1/2  cursor-pointer items-center justify-center rounded-full bg-white shadow-lg duration-200 ease-in-out hover:bg-neutral-100"
      >
        <Image
          src={arrowRight}
          alt="right-arrow"
          width={20}
          height={20}
          className=""
        />
      </div>
      <Image
        src={product.images[selectedImageINdex]}
        alt={product.name}
        width={width}
        height={height}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
        }}
        onClick={onClick}
      />
      {onClose ? (
        <div
          className="absolute top-2  right-2 z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white"
          onClick={onClose}
        >
          <Image src={closeIcon} alt="close-window" width={20} height={20} />
        </div>
      ) : null}
    </div>
  );
};
export default Carousel;
