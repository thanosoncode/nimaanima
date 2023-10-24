'use client';

import { createContext, useContext, useReducer } from 'react';
import { OrderDetails, Product } from './utils/types';

type AppState = {
  cartItems: Product[];
  selectedCategory: string | null;
  selectedFilter: string | null;
  orderDetails: OrderDetails | null;
};

const initialState = {
  cartItems: [],
  selectedCategory: null,
  selectedFilter: null,
  orderDetails: null,
};

type Action =
  | {
      type: 'ADD_CART_ITEM';
      cartItem: Product;
    }
  | {
      type: 'SET_CART_ITEMS_AMOUNT';
      cartItems: Product[];
    }
  | {
      type: 'REMOVE_ITEM';
      id: string;
    }
  | { type: 'EMPTY_CART' }
  | { type: 'SET_SELECTED_CATEGORY'; category: string | null }
  | { type: 'SET_SELECTED_FILTER'; filter: string | null }
  | { type: 'SET_ORDER_DETAILS'; orderDetails: OrderDetails };

type Dispatch = (action: Action) => void;

const AppStateContext = createContext<AppState | undefined>(undefined);
const AppDispatchContext = createContext<Dispatch | undefined>(undefined);

const reducer = (state: AppState, action: Action) => {
  console.log('action', action);
  switch (action.type) {
    case 'ADD_CART_ITEM':
      return { ...state, cartItems: [...state.cartItems, action.cartItem] };
    case 'SET_CART_ITEMS_AMOUNT':
      return { ...state, cartItems: action.cartItems };
    case 'REMOVE_ITEM':
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.id),
      };
    case 'EMPTY_CART':
      return { ...state, cartItems: [] };
    case 'SET_SELECTED_CATEGORY':
      return { ...state, selectedCategory: action.category };
    case 'SET_SELECTED_FILTER':
      return { ...state, selectedFilter: action.filter };
    case 'SET_ORDER_DETAILS':
      return { ...state, orderDetails: action.orderDetails };
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
    throw new Error('useAppState must be used within a AppProvider');
  }
  return context;
};

const useAppDispatch = () => {
  const context = useContext(AppDispatchContext);
  if (context === undefined) {
    throw new Error('useAppDispatch must be used within a AppProvider');
  }
  return context;
};

export { AppProvider, useAppState, useAppDispatch };
