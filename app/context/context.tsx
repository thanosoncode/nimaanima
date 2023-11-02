'use client';

import { createContext, useContext, useReducer } from 'react';
import { NewProduct, OrderDetails, Product } from '../utils/types';

type AppState = {
  cartItems: NewProduct[];
  favorites: Product[];
  selectedCategory: string | null;
  orderDetails: OrderDetails;
  isGift: boolean;
};

const initialState = {
  cartItems: [],
  favorites: [],
  selectedCategory: null,
  orderDetails: {
    email: '',
    fullName: '',
    street: '',
    postalCode: '',
    city: '',
  },
  isGift: false,
};

type Action =
  | {
      type: 'ADD_CART_ITEM';
      cartItem: NewProduct;
    }
  | {
      type: 'ADD_FAVORITE';
      favorite: Product;
    }
  | {
      type: 'REMOVE_FAVORITE';
      id: string;
    }
  | {
      type: 'REMOVE_ITEM';
      id: string;
    }
  | { type: 'EMPTY_CART' }
  | { type: 'SET_ORDER_DETAILS'; orderDetails: OrderDetails }
  | { type: 'SET_IS_GIFT'; isGift: boolean };

type Dispatch = (action: Action) => void;

const AppStateContext = createContext<AppState | undefined>(undefined);
const AppDispatchContext = createContext<Dispatch | undefined>(undefined);

const reducer = (state: AppState, action: Action) => {
  switch (action.type) {
    case 'ADD_CART_ITEM':
      return { ...state, cartItems: [...state.cartItems, action.cartItem] };
    case 'ADD_FAVORITE':
      return { ...state, favorites: [...state.favorites, action.favorite] };
    case 'REMOVE_FAVORITE':
      return {
        ...state,
        favorites: state.favorites.filter((f) => f.id !== action.id),
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.id),
      };
    case 'EMPTY_CART':
      return { ...state, cartItems: [] };
    case 'SET_IS_GIFT':
      return { ...state, isGift: action.isGift };
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
