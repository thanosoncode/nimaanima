import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ProductData } from '../addNewProduct/AddNewProduct';
import { Product } from '@/app/utils/types';

process.env.n;

type InitialState = {
  isSaving: boolean;
  isUploading: boolean;
  isDeleting: boolean;
  fileInputValue: string;
  chosenImages: string[];
  product: ProductData;
  imageData: string[];
};

const initialState: InitialState = {
  isSaving: false,
  isUploading: false,
  isDeleting: false,
  fileInputValue: '',
  chosenImages: [],
  imageData: [],
  product: {
    name: '',
    price: 0,
    description: '',
    category: '',
    images: [],
  },
};

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    setIsSaving: (state, action: PayloadAction<boolean>) => {
      state.isSaving = action.payload;
    },
    setIsUploading: (state, action: PayloadAction<boolean>) => {
      state.isUploading = action.payload;
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
    setIsDeleting: (state, action: PayloadAction<boolean>) => {
      state.isDeleting = action.payload;
    },
    setProduct: (state, action: PayloadAction<ProductData>) => {
      state.product = action.payload;
    },
  },
});

export const {
  setIsSaving,
  setIsUploading,
  setFileInputValue,
  setChosenImages,
  setIsDeleting,
  setProduct,
  setCategory,
  setImageData,
} = adminSlice.actions;

export default adminSlice.reducer;
