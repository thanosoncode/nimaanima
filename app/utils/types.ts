import { StaticImageData } from 'next/image';

export type Category = 'Dolls' | 'Tapestry' | 'Bracelets' | 'Straps';

export type SortBy = 'asc' | 'desc';

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  images: string[];
  gift: boolean;
  sold: boolean;
  stripePriceId: string;
  stripeProductId: string;
};

export interface CartItem extends Product {
  amount: number;
}

export type UploadedImageData = {
  asset_id: string;
  created_at: string;
  secure_url: string;
};

export interface UploadStatus {
  isUploading: boolean;
  isSaving: boolean;
}

export interface OrderDetails {
  fullName: string;
  email: string;
  street: string;
  postalCode: string;
  city: string;
}

export type SearchParams = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export interface UserSession {
  dbUser: {
    id: string;
    name: string;
    email: string;
    image: string;
    favorites: Item[];
    saved: Item[];
    cartItems: Item[];
  };
}

export type Item = {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  images: string[];
  sold: boolean;
  gift: boolean;
  stripePriceId: string;
  stripeProductId: string;
};

type Image = {
  src: StaticImageData;
  alt: string;
};

type Step = {
  info: {
    title: string;
    text: string;
  };
  image: Image;
};

type Header = {
  title: string;
  image: Image;
};

type Footer = {
  title: string;
  text: string;
};

export enum Level {
  one = 'one',
  two = 'two',
}

export interface TechniqueData {
  header: Header;
  steps: Step[];
  footer: Footer;
  rowCarousel: {
    title: string;
    products: Product[];
  };
}

export type CategoryItem = {
  id: number;
  name: Category;
  image: StaticImageData;
  pathname: string;
  title: string;
  subtitle: string;
};
