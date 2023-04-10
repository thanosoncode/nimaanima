import { ImageObj } from "@/mockProduct/mockProduct";
import { StaticImageData } from "next/image";

export type Product = {
  id: number;
  name: string;
  image: StaticImageData;
  description: string;
  price: number;
  category: string;
  images: {
    id: number;
    image: StaticImageData;
  }[];
};

export interface CartItem extends Product {
  amount: number;
}

export type UploadedImageData = {
  asset_id: string;
  created_at: string;
  secure_url: string;
};

export interface MockProduct {
  name: string;
  description: string;
  price: number;
  category: string;
  images: ImageObj[];
}
