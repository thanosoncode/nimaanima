"use client";

import Image from "next/image";
import Container from "../components/Container";
import straps from "../../public/assets/category-straps.webp";
import { getSingleProduct } from "@/lib/products";
import { Product } from "@/app/utils/models";
import AddToCart from "../products/components/AddToCart";
import arrowLeft from "../../public/assets/left-black-arrow.png";
import arrowRight from "../../public/assets/right-black-arrow.png";
import { product } from "./mockProduct";
import { useLayoutEffect, useRef, useState } from "react";

const SingleTest = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [mainImageSize, setMainImageSize] = useState({ width: 0, height: 0 });

  const handlePreviousImageClick = () => {};
  const handleNextImageClick = () => {};

  useLayoutEffect(() => {
    if (ref.current) {
      console.log(ref.current?.getBoundingClientRect().width);
      setMainImageSize({
        width: ref.current?.getBoundingClientRect().width,
        height: ref.current?.getBoundingClientRect().height,
      });
    }
  }, []);

  return (
    <Container classes="w-full items-center justify-between py-4 px-2 md:w-full md:px-8 lg:w-full lg:px-8 xl:max-w-[1400px]">
      <div style={{ display: "flex", gap: "16px" }}>
        <div style={{ width: "70%", position: "relative" }}>
          <div style={{ position: "relative", width: "100%" }} ref={ref}>
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
              src={product.images[currentImage]}
              alt=""
              width={mainImageSize.width}
              height={mainImageSize.height}
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
        <article className="flex w-[30%] flex-col">
          <p className="">{product.name}</p>
          <p className="text-2xl">€ {product.price} </p>
          <p>{product.description}</p>
          <AddToCart product={product} />
        </article>
      </div>
    </Container>
  );
};
export default SingleTest;
