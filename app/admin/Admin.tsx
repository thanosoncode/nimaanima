"use client";

import { useState } from "react";
import { Product, UploadStatus } from "../utils/models";
import Container from "../components/Container";
import Fieldset from "./components/Fieldset";
import { uploadImage, uploadProduct } from "../api/client/helpers";
import MyProducts from "./components/myProducts";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Backdrop from "./components/Backdrop";
import StatusMessage from "./components/StatusMessage";
import PreviewImages from "./components/PreviewImages";
import { RootState, store } from "./store/adminStore";
import {
  setIsSaving,
  setIsUploading,
  setFileInputValue,
} from "./store/adminSlice";
import { useSelector, useDispatch } from "react-redux";

export type ProductData = z.infer<typeof ProductDataSchema>;

const ProductDataSchema = z.object({
  name: z.string().min(3, { message: "name must be over 3 characters" }),
  price: z.number(),
  description: z
    .string()
    .min(3, { message: "description must be over 3 characters" }),
  category: z
    .string()
    .min(3, { message: "category must be over 3 characters" }),
  images: z
    .custom((value) => value instanceof FileList)
    .refine((images: any) => images.length >= 1, {
      message: "Please select at least 1 images",
    }),
});

const Admin = () => {
  const dispatch = useDispatch();
  const { isSaving, isUploading, fileInputValue } = useSelector(
    (state: RootState) => state.admin
  );
  const [chosenImages, setChosenImages] = useState<string[]>([]);
  const [product, setProductInfo] = useState<ProductData>({
    name: "",
    price: 0,
    description: "",
    category: "",
    images: [],
  });
  const [newProduct, setNewProduct] = useState<Product | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleProductInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductInfo({
      ...product,
      [e.target.name]:
        e.target.name === "price" ? Number(e.target.value) : e.target.value,
    });
  };

  const handleImageChange = async (
    changeEvent: React.ChangeEvent<HTMLInputElement>
  ) => {
    const input = changeEvent.currentTarget;
    dispatch(setFileInputValue(input.value));
    if (input.files && input.files.length > 0) {
      try {
        const imageUrls = await loadImages(input.files);
        setChosenImages(imageUrls);
      } catch (error) {
        throw new Error("Error when loading images.");
      }
    }
  };

  const loadImage = (file: File) => {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      if (!file.type.startsWith("image/")) {
        reject("Invalid file type");
      }
      reader.readAsDataURL(file);
      reader.onload = (onLoadEvent) => {
        if (onLoadEvent.target) {
          resolve(onLoadEvent.target.result as string);
        } else {
          reject("Failed to load file");
        }
      };
      reader.onerror = (onErrorEvent) => {
        reject(onErrorEvent);
      };
    });
  };

  const loadImages = (files: FileList) => {
    const promises: Promise<string>[] = [];
    Array.from(files).forEach((promise) => promises.push(loadImage(promise)));
    return Promise.all(promises);
  };

  const submitProduct = async (data: ProductData) => {
    const files = data.images as FileList;
    const formData = new FormData();
    dispatch(setIsUploading(true));
    const imageUrls: string[] = [];
    for (const file of files) {
      formData.append("file", file);
      formData.append("upload_preset", "my_uploads");
      try {
        const uploadedImage = await uploadImage(formData);
        imageUrls.push(uploadedImage.secure_url);
      } catch (error) {
        throw new Error("error uploading image");
      }
    }
    setChosenImages([]);
    dispatch(setFileInputValue(""));
    dispatch(setIsUploading(false));
    dispatch(setIsSaving(true));
    const productToUpload = {
      ...product,
      id: new Date().getTime().toString(),
      images: imageUrls,
    };

    try {
      const uploadedProduct = await uploadProduct(productToUpload);
      setNewProduct(uploadedProduct);
      dispatch(setIsSaving(false));
      setProductInfo({
        name: "",
        price: 0,
        description: "",
        category: "",
        images: [],
      });
    } catch (error) {
      dispatch(setIsSaving(false));
      setNewProduct(null);
      throw new Error("Error uploading product");
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductData>({
    resolver: zodResolver(ProductDataSchema),
  });

  return (
    <Container>
      <h4 className="py-4 text-xl">Add Product</h4>
      <div>
        <StatusMessage />
        <PreviewImages images={chosenImages} />

        <form
          method="post"
          onSubmit={handleSubmit(submitProduct)}
          className="flex w-96 flex-col gap-4 rounded-lg border border-gray-200 p-2.5 shadow"
        >
          <Fieldset
            id="images"
            label="Upload your images"
            info="Note that the first image will be the main of your product"
            type="file"
            register={register}
            handleInputChange={handleImageChange}
            value={fileInputValue}
            inputProps={{ multiple: true }}
          />
          {errors.images && <span>{errors.images.message}</span>}
          <Fieldset
            id="name"
            label="Name"
            type="text"
            register={register}
            handleInputChange={handleProductInfoChange}
            value={product.name}
          />
          {errors.name && <span>{errors.name.message}</span>}
          <Fieldset
            id="description"
            label="Descripton"
            type="text"
            register={register}
            handleInputChange={handleProductInfoChange}
            value={product.description}
          />
          {errors.description && <span>{errors.description.message}</span>}
          <Fieldset
            id="category"
            label="Category"
            type="text"
            register={register}
            handleInputChange={handleProductInfoChange}
            value={product.category}
          />
          {errors.category && <span>{errors.category.message}</span>}
          <Fieldset
            id="price"
            label="Price"
            type="number"
            register={register}
            handleInputChange={handleProductInfoChange}
            value={product.price ? product.price : ""}
          />
          {errors.price && <span>{errors.price.message}</span>}
          <button
            type="submit"
            disabled={isSaving || isUploading}
            className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto"
          >
            Create product
          </button>
        </form>
      </div>
      <MyProducts
        newProduct={newProduct}
        isDeleting={isDeleting}
        setIsDeleting={setIsDeleting}
      />
      <Backdrop open={isDeleting} message="deleting..." />
    </Container>
  );
};
export default Admin;