export type Category = 'Dolls' | 'Tapestry' | 'Bracelets' | 'Straps';

export type SortBy = 'asc' | 'desc';

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
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
