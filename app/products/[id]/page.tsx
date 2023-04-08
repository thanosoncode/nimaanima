"use client";
import Container from "@/app/components/Container";
import { products } from "@/app/data/categories";
import { ImageObj } from "@/mockProduct/mockProduct";
import Image from "next/image";
import { useState } from "react";

const SingleProduct = ({ params: { id } }: { params: { id: string } }) => {
  const product = products.find((product) => product.id === Number(id));
  if (!product) {
    return <Container>{<h4>Sorry, we couldn't find that one.</h4>}</Container>;
  }

  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [mainImage, setMainImage] = useState<ImageObj>(product.images[0]);

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
    const selected = product.images.find((image) => image.id === id);
    if (selected) setMainImage(selected);
  };

  return (
    <Container>
      <div className="flex gap-8 justify-center pt-40">
        <aside className="flex flex-col gap-4 shrink-0">
          {product.images.map((image) => (
            <div className={mainImage.id === image.id ? "border-2" : ""}>
              <Image
                key={image.id}
                src={image.image}
                alt=""
                width={60}
                height={60}
                onClick={() => handleImageChange(image.id)}
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
            src={mainImage.image}
            alt=""
            style={{
              transformOrigin: `${zoomPosition.x}px ${zoomPosition.y}px`,
              transform: isMouseOver ? "scale(2)" : "scale(1)",
              width: "400px",
              height: "400px",
            }}
          />
        </div>
        <article className="flex flex-col gap-5">
          <h1 className="text-3xl">{product.name}</h1>
          <p>{product.description}</p>
          <p className="text-3xl my-4">{product.price} € </p>
        </article>
      </div>
    </Container>
  );
};
export default SingleProduct;
