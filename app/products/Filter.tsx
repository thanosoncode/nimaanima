"use client";

import { useAppDispatch, useAppState } from "@/app/context";
import { useEffect, useState } from "react";
import { BsFilter } from "react-icons/bs";

const Filter = () => {
  const dispatch = useAppDispatch();
  const { selectedFilter } = useAppState();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMouseOver, setIsMouseOver] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSelectionClick = (value: string) => {
    dispatch({ type: "SET_SELECTED_FILTER", filter: value });
    setMenuOpen(false);
  };

  const handleShowAllItems = () => {
    dispatch({ type: "SET_SELECTED_FILTER", filter: null });
    dispatch({ type: "SET_SELECTED_CATEGORY", category: null });
    setMenuOpen(false);
  };

  useEffect(() => {
    const closeModal = () => setMenuOpen(false);
    if (menuOpen && !isMouseOver) {
      document.addEventListener("click", closeModal);
    }
    return () => document.removeEventListener("click", closeModal);
  }, [menuOpen, isMouseOver]);

  const selection = [
    { name: "Price: Low to High", value: "low" },
    { name: "Price: High to Low", value: "high" },
    { name: "Newest", value: "newest" },
  ];

  return (
    <div className="relative">
      <div
        onClick={handleMenuOpen}
        className="w-min cursor-pointer whitespace-nowrap rounded-full border border-black px-4 py-1.5 text-center"
      >
        {selectedFilter ? (
          <p className="text-sm">
            {selection.find((s) => s.value === selectedFilter)?.name}
          </p>
        ) : (
          <BsFilter />
        )}
      </div>
      <div
        onMouseOver={() => setIsMouseOver(true)}
        onMouseLeave={() => setIsMouseOver(false)}
        className={`absolute top-8 right-0 z-10  flex flex-col whitespace-nowrap rounded-lg border bg-white shadow-md duration-300 ease-in-out ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        } `}
      >
        {selection.map((selection) => (
          <div
            key={selection.value}
            onClick={() => handleSelectionClick(selection.value)}
            className="cursor-pointer py-1.5 px-5 hover:bg-neutral-100"
          >
            {selection.name}
          </div>
        ))}
        <div
          onClick={() => handleShowAllItems()}
          className="cursor-pointer border-t border-neutral-300 py-1.5 px-5 hover:bg-neutral-100"
        >
          Show all items
        </div>
      </div>
    </div>
  );
};
export default Filter;
