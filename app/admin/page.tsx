"use client";

import { useState } from "react";
import { Product, UploadedImageData } from "../utils/models";
import Container from "../components/Container";
import Fieldset from "./components/Fieldset";

export type ProductInfo = {
  name: string;
  price: null | number;
  description: string;
  category: string;
};

const Admin = () => {
  const [message, setMessage] = useState("");
  const [uploadStatus, setUploadStatus] = useState({
    isUploading: false,
    isSaving: false,
  });
  const [inputValue, setInputValue] = useState("");
  const [imageSrc, setImageSrc] = useState<string[]>([]);
  const [productInfo, setProductInfo] = useState<ProductInfo>({
    name: "",
    price: null,
    description: "",
    category: "",
  });
  const [newProduct, setNewProduct] = useState<Product>();

  const handleImageChange = (
    changeEvent: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInputValue(changeEvent.currentTarget.value);
    const input = changeEvent.currentTarget;

    if (input.files && input.files.length > 0) {
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

      const loadImages = () => {
        const promises: Promise<string>[] = [];
        if (input.files)
          for (let i = 0; i < input.files.length; i++) {
            promises.push(loadImage(input.files[i]));
          }
        return Promise.all(promises);
      };

      loadImages()
        .then((imageUrls) => {
          setImageSrc(imageUrls);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const elements = Array.from(event.currentTarget.elements);

    const input = elements.find(
      (el) => el.id === "file-input"
    ) as HTMLInputElement;

    const formData = new FormData();

    // if (input.files && input.files.length > 1) {
    //   setMessage("upload only 1 image at a time");
    //   return;
    // }

    // const { name, price, description } = productInfo;

    // if (
    //   !name ||
    //   !description ||
    //   !price ||
    //   typeof price === "string" ||
    //   price < 0
    // ) {
    //   setMessage("Some values are incorrect");
    //   return;
    // }

    if (input.files && input.files.length > 0) {
      const imageUrls: string[] = [];
      for (const file of input.files) {
        formData.append("file", file);
        formData.append("upload_preset", "my_uploads");
        const cloudName = process.env.CLOUD_NAME ?? "";
        try {
          const uploadImageResponse = await fetch(
            `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
            {
              method: "post",
              body: formData,
            }
          );
          const imageData =
            (await uploadImageResponse.json()) as UploadedImageData;

          if (!uploadImageResponse.ok) {
            return;
          }
          imageUrls.push(imageData.secure_url);
          console.log("imageUrls", imageUrls);
        } catch (error) {
          throw new Error("error uploading image");
        }
      }
      console.log("imageUrls", imageUrls);
      const uploadProductResponse = await fetch(
        "http://localhost:3000/api/admin",
        {
          method: "POST",
          body: JSON.stringify({
            ...productInfo,
            images: imageUrls,
          }),
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      const productData = (await uploadProductResponse.json()) as Product;
      if (productData) {
        console.log(productData);
      }
    }
  };

  const handleProductInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(productInfo);
    setProductInfo({
      ...productInfo,
      [e.target.name]:
        e.target.name === "price" ? Number(e.target.value) : e.target.value,
    });
  };

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
        <div>
          {imageSrc.map((src) => (
            <img src={src} style={{ width: "100px", height: "100px" }} />
          ))}
        </div>
        <form
          method="post"
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-96 border border-gray-200 rounded-lg shadow p-2.5"
        >
          <Fieldset
            htmlFor="file-input"
            label="Upload your image"
            type="file"
            handleProductInfoChange={handleImageChange}
            value={inputValue}
            inputProps={{ multiple: true }}
          />

          <Fieldset
            htmlFor="name"
            label="Name"
            type="text"
            handleProductInfoChange={handleProductInfoChange}
            value={productInfo.name}
          />
          <Fieldset
            htmlFor="description"
            label="Descripton"
            type="text"
            handleProductInfoChange={handleProductInfoChange}
            value={productInfo.description}
          />
          <Fieldset
            htmlFor="category"
            label="Category"
            type="text"
            handleProductInfoChange={handleProductInfoChange}
            value={productInfo.category}
          />
          <Fieldset
            htmlFor="price"
            label="Price"
            type="number"
            handleProductInfoChange={handleProductInfoChange}
            value={productInfo.price ? productInfo.price : ""}
          />
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
      {/* <MyProducts newProduct={newProduct} /> */}
    </Container>
  );
};
export default Admin;
