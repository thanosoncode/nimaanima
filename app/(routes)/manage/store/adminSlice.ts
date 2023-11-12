import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ProductData } from "../addNewProduct/AddNewProduct";

type InitialState = {
  isUploadingImages: boolean;
  fileInputValue: string;
  chosenImages: string[];
  product: ProductData;
  imageData: string[];
};

const initialState: InitialState = {
  isUploadingImages: false,
  fileInputValue: "",
  chosenImages: [],
  imageData: [],
  product: {
    name: "",
    price: 0,
    description: "",
    category: "",
    images: [],
  },
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setIsUploadingImages: (state, action: PayloadAction<boolean>) => {
      state.isUploadingImages = action.payload;
    },
    setFileInputValue: (state, action: PayloadAction<string>) => {
      state.fileInputValue = action.payload;
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.product.category = action.payload;
    },
    setImageData: (state, action: PayloadAction<string[]>) => {
      state.chosenImages = action.payload;
    },
    setChosenImages: (state, action: PayloadAction<string[]>) => {
      state.chosenImages = action.payload;
    },
    setProduct: (state, action: PayloadAction<ProductData>) => {
      state.product = action.payload;
    },
  },
});

export const {
  setIsUploadingImages,
  setFileInputValue,
  setChosenImages,
  setProduct,
  setCategory,
  setImageData,
} = adminSlice.actions;

export default adminSlice.reducer;
