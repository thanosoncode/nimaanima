"use client";

import { Product } from "@prisma/client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AdminState } from "../store/adminStore";
import { setIsDeleting } from "../store/adminSlice";

const MyProducts: React.FC = () => {
  const dispatch = useDispatch();
  const { isDeleting, newProduct } = useSelector(
    (state: AdminState) => state.admin
  );
  const [products, setProducts] = useState<Product[]>([]);

  const getProducts = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/products");
      const data = (await response.json()) as Product[];
      setProducts(data);
    } catch (error) {
      throw new Error("error fetching products");
    }
  };
  useEffect(() => {
    getProducts();
  }, [newProduct]);

  const handleProductDelete = async (id: string) => {
    dispatch(setIsDeleting(true));
    try {
      const response = await fetch(`http://localhost:3000/api/admin/${id}`, {
        method: "DELETE",
      });
      const data = (await response.json()) as { product: Product };
      if (data.product.id) {
        setProducts(
          products.filter((product) => product.id !== data.product.id)
        );
      }
      dispatch(setIsDeleting(false));
    } catch (error) {
      dispatch(setIsDeleting(false));
      throw new Error("error deleting product");
    }
  };
  return (
    <div>
      <h4>MyProducts</h4>
      <div className="flex flex-wrap gap-4">
        {products.length > 0
          ? products.map((product) => (
              <div key={product.id}>
                <p>{product.name}</p>
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  width={100}
                  height={100}
                />
                <button
                  onClick={() => handleProductDelete(product.id)}
                  disabled={isDeleting}
                >
                  delete product
                </button>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};
export default MyProducts;
