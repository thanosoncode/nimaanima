import Container from "../../../components/container/Container";
import Fieldset from "./fieldSet/Fieldset";
import { uploadImage, uploadProduct } from "../../../api/client/helpers";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Backdrop from "../../../components/backdrop/Backdrop";
import PreviewImages from "./previeImages/PreviewImages";
import { AdminState } from "../store/adminStore";
import {
  setFileInputValue,
  setChosenImages,
  setProduct,
  setCategory,
  setIsUploadingImages,
} from "../store/adminSlice";
import { useSelector, useDispatch } from "react-redux";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export type ProductData = z.infer<typeof ProductDataSchema>;

const CategoryEnum = {
  Bracelets: "Bracelets",
  Tapestry: "Tapestry",
  Dolls: "Dolls",
  Straps: "Straps",
};

const ProductDataSchema = z.object({
  name: z.string().min(3, { message: "Name must be over 3 characters" }),
  price: z.number(),
  description: z
    .string()
    .min(3, { message: "Description must be over 3 characters" }),
  category: z.nativeEnum(CategoryEnum, {
    errorMap: (issue, _ctx) => {
      switch (issue.code) {
        case "invalid_type":
          return { message: "Please choose one" };
        case "invalid_enum_value":
          return { message: "Please choose one" };
        default:
          return { message: "Category is required" };
      }
    },
  }),
  images: z
    .custom((value) => value instanceof FileList)
    .refine((images: any) => images.length >= 1, {
      message: "Please select at least 1 image",
    }),
});

const AddNewProduct = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const { fileInputValue, chosenImages, product, isUploadingImages } =
    useSelector((state: AdminState) => state.admin);

  const handleProductInfoChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    dispatch(
      setProduct({
        ...product,
        [e.target.name]:
          e.target.name === "price" ? Number(e.target.value) : e.target.value,
      }),
    );
  };

  const handleImageChange = async (
    changeEvent: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const input = changeEvent.currentTarget;
    dispatch(setFileInputValue(input.value));
    if (input.files && input.files.length > 0) {
      try {
        const imageUrls = await loadImages(input.files);
        dispatch(setChosenImages(imageUrls));
      } catch (error) {
        throw new Error("Error when loading images.");
      }
    } else {
      dispatch(setChosenImages([]));
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

  const { mutate, isPending: isCreatingProduct } = useMutation({
    mutationKey: ["create-product"],
    mutationFn: (product: ProductData) => uploadProduct(product),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["my-products"] }),
  });

  const submitProduct = async (data: ProductData) => {
    const files = data.images as FileList;
    const formData = new FormData();

    dispatch(setIsUploadingImages(true));
    const imageUrls: string[] = [];
    for (const file of files) {
      formData.append("file", file);
      formData.append("upload_preset", "nimaanima");
      try {
        const uploadedImage = await uploadImage(formData);
        imageUrls.push(uploadedImage.secure_url);
      } catch (error) {
        dispatch(setChosenImages([]));
        dispatch(setFileInputValue(""));
        dispatch(setIsUploadingImages(false));
        throw new Error("error uploading image");
      }
    }
    dispatch(setChosenImages([]));
    dispatch(setFileInputValue(""));
    dispatch(setIsUploadingImages(false));
    const productToUpload = {
      ...product,
      id: new Date().getTime().toString(),
      images: imageUrls,
    };

    try {
      mutate(productToUpload);
      dispatch(
        setProduct({
          name: "",
          price: 0,
          description: "",
          category: "",
          images: [],
        }),
      );
    } catch (error) {
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
      <div>
        <div>
          <PreviewImages images={chosenImages} />
          <form
            method="post"
            onSubmit={handleSubmit(submitProduct)}
            className="mx-auto flex w-full flex-col rounded-lg border border-gray-200 p-2.5 shadow sm:w-[500px]"
          >
            <Fieldset
              id="images"
              label="Upload your images"
              info="Note that the first image will be the main of your product"
              type="file"
              register={register}
              handleImageChange={handleImageChange}
              value={fileInputValue}
              inputProps={{
                multiple: true,
                accept: "image/png, image/gif, image/jpeg",
              }}
            />
            {errors.images ? (
              <span className="tex-sm text-red-400">
                {errors.images.message}
              </span>
            ) : (
              <span className="p-3"></span>
            )}
            <Fieldset
              id="name"
              label="Name"
              type="text"
              register={register}
              handleInputChange={handleProductInfoChange}
              value={product.name}
            />
            {errors.name ? (
              <span className="tex-sm text-red-400">{errors.name.message}</span>
            ) : (
              <span className="p-3"></span>
            )}
            <Fieldset
              id="description"
              label="Description"
              type="text"
              register={register}
              handleInputChange={handleProductInfoChange}
              value={product.description}
            />
            {errors.description ? (
              <span className="tex-sm text-red-400">
                {errors.description.message}
              </span>
            ) : (
              <span className="p-3"></span>
            )}
            <div>
              <label htmlFor="category" className="mr-2">
                Category
              </label>
              <select
                id="category"
                {...register("category")}
                value={product.category}
                onChange={(e) => dispatch(setCategory(e.target.value))}
              >
                <option value="">Choose category</option>
                <option value="Bracelets">Bracelets</option>
                <option value="Tapestry">Tapestry</option>
                <option value="Dolls">Dolls</option>
                <option value="Straps">Straps</option>
              </select>
            </div>

            {errors.category ? (
              <span className="tex-sm text-red-400">
                {errors.category.message}
              </span>
            ) : (
              <span className="p-3"></span>
            )}
            <Fieldset
              id="price"
              label="Price"
              type="number"
              register={register}
              handleInputChange={handleProductInfoChange}
              value={product.price ? product.price : ""}
            />
            {errors.price ? (
              <span className="tex-sm text-red-400">
                {errors.price.message}
              </span>
            ) : (
              <span className="p-3"></span>
            )}
            <button
              type="submit"
              disabled={isUploadingImages || isCreatingProduct}
              className="w-full rounded-lg bg-black px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-neutral-600 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto"
            >
              Create product
            </button>
          </form>
        </div>
      </div>
      <Backdrop open={isUploadingImages || isCreatingProduct}>
        <div className="rounded bg-white py-8 px-16">
          {isUploadingImages && "Uploading images..."}
          {isCreatingProduct && "Creating product..."}
        </div>
      </Backdrop>
    </Container>
  );
};
export default AddNewProduct;
