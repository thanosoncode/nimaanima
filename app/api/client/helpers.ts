import { Product, UploadedImageData } from "@/app/utils/models";

export const uploadImage = async (formData: FormData) => {
  const cloudName = process.env.CLOUD_NAME ?? "";
  try {
    const uploadImageResponse = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      {
        method: "post",
        body: formData,
      }
    );
    const imageData = (await uploadImageResponse.json()) as UploadedImageData;
    return imageData;
  } catch (error) {
    throw new Error("Error uploading image");
  }
};

export const uploadProduct = async (product: Product) => {
  try {
    const uploadProductResponse = await fetch(
      "http://localhost:3000/api/admin",
      {
        method: "POST",
        body: JSON.stringify(product),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const productData = (await uploadProductResponse.json()) as Product;
    return productData;
  } catch (error) {
    throw new Error("Error uploading product");
  }
};

export const deleteProduct = async (id: string) => {
  try {
    const response = await fetch(`http://localhost:3000/api/admin/${id}`, {
      method: "DELETE",
    });
    const data = (await response.json()) as { product: Product };
    return data;
  } catch (error) {
    throw new Error("Error deleting product");
  }
};
