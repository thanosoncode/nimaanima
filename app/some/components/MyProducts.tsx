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
      const response = await fetch("/api/products");
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
      const response = await fetch(`/api/admin/${id}`, {
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
      <h4 className="mb-4 text-center text-xl">My products</h4>
      <table className="w-full border">
        <thead className="uppercase">
          <tr className="border-b p-1">
            <th className="text-center"></th>
            <th className="text-center">Name</th>
            <th className="text-center">Category</th>
            <th className="text-center">Description</th>
            <th className="text-center">Price</th>
            <th className="text-center">Delete</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0
            ? products.map((product) => (
                <tr key={product.id} className="p-1">
                  <td className="p-2">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      width={80}
                      height={80}
                    />
                  </td>
                  <td className="p-2 text-center">{product.name}</td>
                  <td className="p-2 text-center">{product.category}</td>
                  <td className="p-2 text-center">{product.description}</td>
                  <td className="p-2 text-center">{product.price}</td>
                  <td className="p-2 text-center">
                    <button
                      className="rounded bg-red-400 py-1 px-3 text-white hover:bg-red-200"
                      onClick={() => handleProductDelete(product.id)}
                      disabled={isDeleting}
                    >
                      delete product
                    </button>
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
};
export default MyProducts;
