import polo1 from "./assets/polo-1.jpeg";
import polo2 from "./assets/polo-2.jpeg";
import polothumb1 from "./assets/polo-thumb.jpeg";
import polothumb2 from "./assets/polo-thumb-2.jpeg";
import { StaticImageData } from "next/image";

export type ImageObj = { id: number; image: StaticImageData };

export const mockProduct: {
  name: string;
  description: string;
  price: number;
  category: string;

  images: ImageObj[];
} = {
  name: "Polo shirt",
  description:
    "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
  price: 9,
  category: "Men",
  images: [
    { id: 1, image: polothumb1 },
    { id: 2, image: polothumb2 },
    { id: 3, image: polo1 },
    { id: 4, image: polo2 },
  ],
};
