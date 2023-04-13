import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type InitialState = {
  isSaving: boolean;
  isUploading: boolean;
  fileInputValue: string;
};

const initialState: InitialState = {
  isSaving: false,
  isUploading: false,
  fileInputValue: "",
};

const adminSlice = createSlice({
  name: "admin",
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
  },
});

export const { setIsSaving, setIsUploading, setFileInputValue } =
  adminSlice.actions;

export default adminSlice.reducer;
