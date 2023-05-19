"use client";

import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";
import arrowLeft from "../../public/assets/left-black-arrow.png";
import arrowRight from "../../public/assets/right-black-arrow.png";
import closeIcon from "../../public/assets/window-close.png";

interface TestCarouselProps {
  images: string[];
  onClose: () => void;
}

const TestCarousel: React.FC<TestCarouselProps> = (props) => {
  const [currentImage, setCurrentImage] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [mainImageSize, setMainImageSize] = useState({ width: 0, height: 0 });

  const handlePreviousImageClick = () => {
    if (currentImage > 0) {
      setCurrentImage((prev) => prev - 1);
    } else {
      setCurrentImage(props.images.length - 1);
    }
  };

  const handleNextImageClick = () => {
    if (currentImage < props.images.length - 1) {
      setCurrentImage((prev) => prev + 1);
    } else {
      setCurrentImage(0);
    }
  };

  return (
    <div style={{ width: "100%", position: "relative" }}>
      <div style={{ position: "relative", width: "100%" }}>
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
          src={props.images[currentImage]}
          alt=""
          width={800}
          height={600}
          style={{
            objectFit: "contain",
            maxHeight: "600px",
            background: "#f1f1f1",
            borderRadius: "10px",
            width: "100%",
          }}
        />
      </div>
      {props.onClose ? (
        <div
          className="absolute top-2  right-2 z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white"
          onClick={props.onClose}
        >
          <Image src={closeIcon} alt="close-window" width={20} height={20} />
        </div>
      ) : null}
    </div>
  );
};
export default TestCarousel;
