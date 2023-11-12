"use client";
import { Product } from "@/app/utils/types";
import React, { useEffect } from "react";

const LocalCartItemsRemover = ({ ids }: { ids: string[] | undefined }) => {
  useEffect(() => {
    const storage = localStorage.getItem("cartItems");
    if (storage) {
      const items = JSON.parse(storage) as Product[];
      if (ids) {
        const newItems = items.filter((item) => !ids.includes(item.id));
        localStorage.setItem("cartItems", JSON.stringify(newItems));
      }
    }
  }, []);

  return <></>;
};

export default LocalCartItemsRemover;
