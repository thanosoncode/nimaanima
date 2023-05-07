export type Product = {
  id: string;
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
