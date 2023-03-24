import { StaticImageData } from "next/image";

export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
};

export interface CartItem extends Product {
  amount: number;
}

export type UploadedImageData = {
  asset_id: string;
  created_at: string;
  secure_url: string;
};
