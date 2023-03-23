import { StaticImageData } from "next/image";

export type Product = {
  id: number;
  name: string;
  price: number;
  image: StaticImageData;
  description: string;
};

export type UploadedImageData = {
  asset_id: string;
  created_at: string;
  secure_url: string;
};
