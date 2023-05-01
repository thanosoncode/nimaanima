"use client";

import { useAppDispatch, useAppState } from "@/app/context";
import { useState } from "react";

const Filter = () => {
  const dispatch = useAppDispatch();
  const { selectedFilter } = useAppState();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(true);
  };

  const handleSelectionClick = (value: string) => {
    dispatch({ type: "SET_SELECTED_FILTER", filter: value });
    setMenuOpen(false);
  };

  const selection = [
    { name: "Price: Low to High", value: "low" },
    { name: "Price: High to Low", value: "high" },
    { name: "Newest", value: "newest" },
    { name: "Clear filters", value: "clear" },
  ];

  return (
    <div className="relative">
      <p
        onClick={handleMenuOpen}
        className="w-20 cursor-pointer rounded-full border-2 border-black py-1 text-center"
      >
        {selectedFilter ? selectedFilter : "Filters"}
      </p>
      <div
        className={`absolute top-10 left-0 flex flex-col ${
          menuOpen ? "block" : "hidden"
        } `}
      >
        {selection.map((selection) => (
          <div
            key={selection.value}
            onClick={() => handleSelectionClick(selection.value)}
            className="cursor-pointer py-1 px-4 hover:bg-neutral-100"
          >
            {selection.name}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Filter;
