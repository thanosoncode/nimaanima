"use client";

import { createContext, useContext, useReducer } from "react";

type AppState = {
  cartItems: { name: string }[];
};

const initialState = {
  cartItems: [{ name: "hello" }],
};

type Action =
  | {
      type: "ADD_CART_ITEM";
      cartItem: { name: string };
    }
  | { type: "EMPTY_CART" };

type Dispatch = (action: Action) => void;

const AppStateContext = createContext<AppState | undefined>(undefined);
const AppDispatchContext = createContext<Dispatch | undefined>(undefined);

const reducer = (state: AppState, action: Action) => {
  switch (action.type) {
    case "ADD_CART_ITEM":
      return { ...state, cartItems: [...state.cartItems, action.cartItem] };

    case "EMPTY_CART":
      return { ...state, cartItems: [] };

    default: {
      throw new Error(`Unhandled action type: ${action}`);
    }
  }
};

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};

const useAppState = () => {
  const context = useContext(AppStateContext);
  if (context === undefined) {
    throw new Error("useAppState must be used within a AppProvider");
  }
  return context;
};

const useAppDispatch = () => {
  const context = useContext(AppDispatchContext);
  if (context === undefined) {
    throw new Error("useAppDispatch must be used within a AppProvider");
  }
  return context;
};

export { AppProvider, useAppState, useAppDispatch };
