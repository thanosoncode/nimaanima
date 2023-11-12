"use client";
import Spinner from "@/app/components/spinner/Spinner";
import { useAppDispatch, useAppState } from "@/app/context/context";
import { Product, UserSession } from "@/app/utils/types";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

interface AddToFavoritesProps {
  product: Product;
  size: number;
  isFavorite?: boolean | undefined;
}

const AddToFavorites = ({ product, size, isFavorite }: AddToFavoritesProps) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { data } = useSession() as { data: UserSession | null };
  const userId = data?.dbUser.id;
  const [isLoading, setIsLoading] = useState(false);
  const { favorites } = useAppState();

  const isLocalFavorite = favorites.find((fav) => fav.id === product.id);

  const favorite = userId ? isFavorite : isLocalFavorite ? true : false;

  const handleClick = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    if (!userId) {
      const storage = localStorage.getItem("favorites");
      if (!storage) {
        localStorage.setItem("favorites", JSON.stringify([product]));
      }
      if (storage) {
        const list = JSON.parse(storage) as Product[];
        if (list.length === 0) {
          localStorage.setItem("favorites", JSON.stringify([product]));
        }
        if (list.length > 0) {
          const favoriteExists = list.find((f) => f.id === product.id);
          if (favoriteExists) {
            const filtered = list.filter((fav) => fav.id !== product.id);
            localStorage.setItem("favorites", JSON.stringify(filtered));
          } else {
            const newList = [...list, product];
            localStorage.setItem("favorites", JSON.stringify(newList));
          }
        }
      }
      dispatch({ type: "ADD_FAVORITE", favorite: product });
    }

    if (userId) {
      const method = isFavorite ? "DELETE" : "POST";
      setIsLoading(true);
      const response = await fetch("api/favorites", {
        method,
        body: JSON.stringify({
          userId: userId,
          favorite: product,
        }),
      });
      if (response.ok) {
        router.refresh();
        setIsLoading(false);
      }
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={(e) => handleClick(e)}
      disabled={isLoading}
      className={` visible  absolute top-2 right-2 z-20 rounded-full  border bg-white p-1`}
    >
      {isLoading ? (
        <Spinner />
      ) : favorite ? (
        <AiFillHeart fill="darkred" size={size} />
      ) : (
        <AiOutlineHeart size={size} />
      )}
    </button>
  );
};

export default AddToFavorites;
