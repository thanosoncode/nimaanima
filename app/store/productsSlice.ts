import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Product } from "../utils/models";

type InitialState = {
  products: Product[];
};

const initialState: InitialState = {
  products: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;
