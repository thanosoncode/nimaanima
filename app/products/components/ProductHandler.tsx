"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Product } from "@/app/utils/models";
import Modal from "./Modal";
import Carousel from "./Carousel";

interface ProductHandlerProps {
  product: Product;
}

const ProductHandler: React.FC<ProductHandlerProps> = ({ product }) => {
  const [selectedImageINdex, setSelectedImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMainImageDimensions, setModalMainImageDimensions] = useState({
    width: Math.floor(window.innerWidth * 0.8),
    height: Math.floor(window.innerHeight * 0.8),
  });
  const [mainImageDimensions, setmainImageDimensions] = useState({
    width: Math.floor(window.innerWidth * 0.5),
    height: Math.floor(window.innerHeight * 0.6),
  });

  const handleImageSelect = (index: number) => {
    setSelectedImageIndex(index);
  };

  const openModalView = () => setIsModalOpen(true);
  const closeModalView = () => setIsModalOpen(false);

  useEffect(() => {
    const handleSize = () => {
      setModalMainImageDimensions({
        width: Math.floor(window.innerWidth * 0.8),
        height: Math.floor(window.innerHeight * 0.8),
      });
      setmainImageDimensions({
        width: Math.floor(window.innerWidth * 0.5),
        height: Math.floor(window.innerHeight * 0.6),
      });
    };

    window.addEventListener("resize", handleSize);
    return () => window.removeEventListener("resize", handleSize);
  }, []);

  return (
    <>
      <section className="mr-10 flex gap-4">
        <aside className="flex shrink-0 flex-col gap-4">
          {product.images.map((image, index) => (
            <div
              key={index}
              className={`cursor-pointer overflow-hidden rounded ${
                selectedImageINdex === index
                  ? "border-2 border-black opacity-100"
                  : "border-2 border-transparent opacity-70"
              } `}
            >
              <Image
                key={index}
                src={image}
                alt=""
                width={60}
                height={60}
                onClick={() => handleImageSelect(index)}
              />
            </div>
          ))}
        </aside>
        <Carousel
          product={product}
          selectedImageINdex={selectedImageINdex}
          setSelectedImageIndex={setSelectedImageIndex}
          width={mainImageDimensions.width}
          height={mainImageDimensions.height}
          onClick={openModalView}
        />
      </section>
      <Modal open={isModalOpen}>
        <Carousel
          product={product}
          selectedImageINdex={selectedImageINdex}
          setSelectedImageIndex={setSelectedImageIndex}
          width={modalMainImageDimensions.width}
          height={modalMainImageDimensions.height}
          onClose={closeModalView}
        />
      </Modal>
    </>
  );
};
export default ProductHandler;
