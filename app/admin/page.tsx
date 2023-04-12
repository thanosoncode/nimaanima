"use client";

import { useState } from "react";
import { Product } from "../utils/models";
import Container from "../components/Container";
import Fieldset from "./components/Fieldset";
import { uploadImage, uploadProduct } from "../api/client/helpers";
import MyProducts from "./myProducts";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export type ProductInfo = {
  name: string;
  price: number;
  description: string;
  category: string;
  images: string[];
};

const ZProductIfo = z.object({
  name: z.string().min(3, { message: "name must be over 3 characters" }),
  price: z.number(),
  description: z
    .string()
    .min(3, { message: "description must be over 3 characters" }),
  category: z
    .string()
    .min(3, { message: "category must be over 3 characters" }),
  images: z.array(z.string()),
});

const Admin = () => {
  const [message, setMessage] = useState("");
  const [uploadStatus, setUploadStatus] = useState({
    isUploading: false,
    isSaving: false,
  });
  const [fileInputValue, setFileInputValue] = useState("");
  const [chosenImages, setChosenImages] = useState<string[]>([]);
  const [productInfo, setProductInfo] = useState<ProductInfo>({
    name: "",
    price: 0,
    description: "",
    category: "",
    images: [],
  });
  const [newProduct, setNewProduct] = useState<Product | null>(null);

  const handleImageChange = (
    changeEvent: React.ChangeEvent<HTMLInputElement>
  ) => {
    const input = changeEvent.currentTarget;
    setFileInputValue(input.value);
    if (input.files && input.files.length > 0) {
      const promises = loadImages(input.files);
      promises
        .then((imageUrls) => {
          setChosenImages(imageUrls);
        })
        .catch((error) => {
          console.log(error);
        });
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
    for (let i = 0; i < files.length; i++) {
      promises.push(loadImage(files[i]));
    }
    return Promise.all(promises);
  };

  const submitProduct = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const elements = Array.from(event.currentTarget.elements);
    const input = elements.find((el) => el.id === "images") as HTMLInputElement;

    const formData = new FormData();
    if (input.files && input.files.length > 0) {
      setUploadStatus({ ...uploadStatus, isUploading: true });
      const imageUrls: string[] = [];
      for (const file of input.files) {
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
      setFileInputValue("");
      setUploadStatus({ ...uploadStatus, isUploading: false });
      setUploadStatus({ ...uploadStatus, isSaving: true });

      try {
        const uploadedProduct = await uploadProduct({
          ...productInfo,
          images: imageUrls,
        });
        setNewProduct(uploadedProduct);
        setUploadStatus({ ...uploadStatus, isSaving: false });
        setProductInfo({
          name: "",
          price: 0,
          description: "",
          category: "",
          images: [],
        });
      } catch (error) {
        setUploadStatus({ ...uploadStatus, isSaving: false });
        setNewProduct(null);
        console.log(error);
        throw new Error("Error uploading product");
      }
    }
  };

  const handleProductInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductInfo({
      ...productInfo,
      [e.target.name]:
        e.target.name === "price" ? Number(e.target.value) : e.target.value,
    });
  };

  const mockSubmit = (data: ProductInfo) => console.log(data);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductInfo>({
    resolver: zodResolver(ZProductIfo),
  });

  return (
    <Container>
      <h4 className="py-4 text-xl">Add Product</h4>
      <div>
        <p className="p-2">
          {uploadStatus.isUploading
            ? "Uploading... This might take a few seconds."
            : uploadStatus.isSaving
            ? "Saving to database..."
            : ""}
        </p>
        <p className="p-2">{message ? message : null}</p>
        {chosenImages.length > 0 ? (
          <div>
            <h4>Images</h4>
            <div style={{ display: "flex", gap: "16px" }}>
              {chosenImages.map((image) => (
                <img
                  src={image}
                  style={{
                    width: "100px",
                    height: "100px",
                  }}
                  key={image}
                />
              ))}
            </div>
          </div>
        ) : null}

        <form
          method="post"
          onSubmit={handleSubmit(mockSubmit)}
          className="flex flex-col gap-4 w-96 border border-gray-200 rounded-lg shadow p-2.5"
        >
          <Fieldset
            id="images"
            label="Upload your images"
            info="Note that the first image will be the main of your product"
            type="file"
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
            value={productInfo.name}
          />
          {errors.name && <span>{errors.name.message}</span>}
          <Fieldset
            id="description"
            label="Descripton"
            type="text"
            register={register}
            handleInputChange={handleProductInfoChange}
            value={productInfo.description}
          />
          {errors.description && <span>{errors.description.message}</span>}
          <Fieldset
            id="category"
            label="Category"
            type="text"
            register={register}
            handleInputChange={handleProductInfoChange}
            value={productInfo.category}
          />
          {errors.category && <span>{errors.category.message}</span>}
          <Fieldset
            id="price"
            label="Price"
            type="number"
            register={register}
            handleInputChange={handleProductInfoChange}
            value={productInfo.price ? productInfo.price : ""}
          />
          {errors.price && <span>{errors.price.message}</span>}
          <button
            type="submit"
            disabled={uploadStatus.isSaving || uploadStatus.isUploading}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Create product
          </button>
        </form>
      </div>
      {/* @ts-ignore*/}
      <MyProducts newProduct={newProduct} />
    </Container>
  );
};
export default Admin;
