"use client";

import { useState } from "react";
import { Product, UploadedImageData } from "../utils/models";

const Admin = () => {
  const [message, setMessage] = useState("");
  const [uploadStatus, setUploadStatus] = useState({
    isUploading: false,
    isSaving: false,
  });
  const [inputValue, setInputValue] = useState("");
  const [imageSrc, setImageSrc] = useState<string | ArrayBuffer | null>(null);
  const [productInfo, setProductInfo] = useState<{
    name: string;
    price: null | number;
    description: string;
  }>({
    name: "",
    price: null,
    description: "",
  });

  const handleImageChange = (
    changeEvent: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInputValue(changeEvent.currentTarget.value);
    const input = changeEvent.currentTarget;
    if (input.files && input.files.length > 1) {
      setMessage("upload only 1 image at a time");
      return;
    }

    const reader = new FileReader();
    reader.onload = (onLoadEvent) => {
      if (onLoadEvent.target) {
        setImageSrc(onLoadEvent.target.result);
      }
    };
    if (changeEvent.target.files && changeEvent.target.files[0]) {
      reader.readAsDataURL(changeEvent.target.files[0]);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const elements = Array.from(event.currentTarget.elements);

    const input = elements.find(
      (el) => el.id === "file-input"
    ) as HTMLInputElement;

    const formData = new FormData();

    if (input.files && input.files.length > 1) {
      setMessage("upload only 1 image at a time");
      return;
    }

    const { name, price, description } = productInfo;

    if (
      !name ||
      !description ||
      !price ||
      typeof price === "string" ||
      price < 0
    ) {
      setMessage("Some values are incorrect");
      return;
    }

    const file = input.files && input.files[0];
    if (file) {
      formData.append("file", file);
    }
    formData.append("upload_preset", "my_uploads");

    setUploadStatus({ ...uploadStatus, isUploading: true });
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

      if (!uploadImageResponse.ok) {
        setMessage("Image file is required");
        setUploadStatus({ ...uploadStatus, isUploading: false });
        return;
      }
      setUploadStatus({ ...uploadStatus, isUploading: false, isSaving: true });

      const uploadProductResponse = await fetch(
        "http://localhost:3000/api/admin",
        {
          method: "POST",
          body: JSON.stringify({
            ...productInfo,
            image: imageData.secure_url,
          }),
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      const productData = (await uploadProductResponse.json()) as Product;
      if (productData) {
        setProductInfo({ name: "", description: "", price: 0 });
        handleProductSubmitSuccess();
      }
      setUploadStatus({ ...uploadStatus, isSaving: false });
      setMessage("Success!");
      setInputValue("");
      setImageSrc(null);
    } catch (error) {
      setUploadStatus({ ...uploadStatus, isUploading: false, isSaving: false });
      setInputValue("");
      setImageSrc(null);
      throw new Error("error uploading image");
    }
  };

  const handleProductSubmitSuccess = () => {
    setMessage("Success!");
    setInputValue("");
    setImageSrc(null);
  };

  const handleProductInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductInfo({
      ...productInfo,
      [e.target.name]:
        e.target.name === "price" ? Number(e.target.value) : e.target.value,
    });
  };

  return (
    <>
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
          {imageSrc && typeof imageSrc === "string" && (
            <img src={imageSrc} className="w-24 h-18" />
          )}
        </div>
        <form
          method="post"
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-96 border border-gray-200 rounded-lg shadow p-2.5"
        >
          <fieldset className="flex flex-col gap-2">
            <label
              htmlFor="file-input"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Upload your image
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              type="file"
              name="file-input"
              id="file-input"
              value={inputValue}
              onChange={handleImageChange}
            />
          </fieldset>
          <fieldset className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Name
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              type="text"
              id="name"
              name="name"
              value={productInfo.name}
              onChange={handleProductInfoChange}
            />
          </fieldset>
          <fieldset className="flex flex-col gap-2">
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Description
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              type="text"
              id="description"
              name="description"
              value={productInfo.description}
              onChange={handleProductInfoChange}
            />
          </fieldset>
          <fieldset className="flex flex-col gap-2">
            <label
              htmlFor="price"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Price
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              type="number"
              id="price"
              name="price"
              min={0}
              value={productInfo.price ? productInfo.price : ""}
              onChange={handleProductInfoChange}
            />
          </fieldset>
          <button
            type="submit"
            disabled={uploadStatus.isSaving || uploadStatus.isUploading}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Create product
          </button>
        </form>
      </div>
    </>
  );
};
export default Admin;
