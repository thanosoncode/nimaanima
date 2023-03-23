"use client";

import { productsData } from "@/data/products";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Product } from "../utils/models";
import Modal from "./Modal";

const Products = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [products, setProducts] = useState<Product[]>([]);

  const handleProductClick = (id: number) => {
    setIsModalOpen(true);
    setSelectedProduct(productsData.find((p) => p.id === id) ?? null);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/products");
        const data = (await response.json()) as Product[];
        console.log(data);
        if (data) {
          setProducts(data);
        }
      } catch (error) {
        throw new Error("error fetching products");
      }
    };
    getProducts();
  }, []);

  return (
    <>
      <main className="relative h-full overflow-y-hidden">
        <h4 className="py-4">Products</h4>
        <div className="flex gap-4 flex-wrap justify-center">
          {products.map((product) => (
            <div key={product.id}>
              <div
                className="relative h-64 w-96"
                onClick={() => handleProductClick(product.id)}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  style={{ objectFit: "cover" }}
                  fill
                />
              </div>
              <div className="p-2 flex justify-between ">
                <div>
                  <p className="">{product.name}</p>
                  <p className="">{product.price}€</p>
                </div>
                <p>Add to cart</p>
              </div>
            </div>
          ))}
        </div>
        <Modal
          open={isModalOpen}
          product={selectedProduct}
          onClose={handleCloseModal}
        />
      </main>
    </>
  );
};
export default Products;
