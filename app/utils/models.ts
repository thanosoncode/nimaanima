import { ImageObj } from "@/mockProduct/mockProduct";
import { StaticImageData } from "next/image";

export type Product = {
  name: string;
  description: string;
  price: number;
  category: string;
  images: string[];
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

export interface UploadStatus {
  isUploading: boolean;
  isSaving: boolean;
}
