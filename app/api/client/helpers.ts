import { ProductData } from '@/app/(routes)/manage/addNewProduct/AddNewProduct';
import { Product, UploadedImageData } from '@/app/utils/types';

export const uploadImage = async (formData: FormData) => {
  const cloudName = process.env.CLOUD_NAME ?? '';
  try {
    const uploadImageResponse = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      {
        method: 'post',
        body: formData,
      }
    );
    const imageData = (await uploadImageResponse.json()) as UploadedImageData;
    return imageData;
  } catch (error) {
    throw new Error('Error uploading image');
  }
};

export const uploadProduct = async (product: ProductData): Promise<Product> => {
  const uploadProductResponse = await fetch('/api/manage', {
    method: 'POST',
    body: JSON.stringify(product),
    headers: {
      'Content-type': 'application/json',
    },
  });
  const newProduct = (await uploadProductResponse.json()) as Product;
  return newProduct;
};

export const deleteProduct = async (id: string) => {
  try {
    const response = await fetch(`/api/manage/${id}`, {
      method: 'DELETE',
    });
    const data = (await response.json()) as { product: Product };
    return data;
  } catch (error) {
    throw new Error('Error deleting product');
  }
};
