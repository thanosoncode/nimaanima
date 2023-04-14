import { configureStore } from "@reduxjs/toolkit";
import adminSlice from "./adminSlice";

export const store = configureStore({
  reducer: {
    admin: adminSlice,
  },
});

export type AdminState = ReturnType<typeof store.getState>;
export type AdminDispatch = typeof store.dispatch;
