'use client';

import { createContext, useContext, useReducer } from 'react';
import { OrderDetails, Product } from '../utils/types';

type AppState = {
  cartItems: Product[];
  favorites: Product[];
  saved: Product[];
  selectedCategory: string | null;
  orderDetails: OrderDetails;
  isGift: boolean;
};

const initialState = {
  cartItems: [],
  favorites: [],
  saved: [],
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
      cartItem: Product;
    }
  | {
      type: 'ADD_FAVORITE';
      favorite: Product;
    }
  | {
      type: 'ADD_SAVED_ITEM';
      savedItem: Product;
    }
  | {
      type: 'REMOVE_SAVED_ITEM';
      savedItem: Product;
    }
  | {
      type: 'SET_INITIAL_FAVORITES';
      favorites: Product[];
    }
  | {
      type: 'SET_INITIAL_CART_ITEMS';
      cartItems: Product[];
    }
  | {
      type: 'SET_INITIAL_SAVED_ITEMS';
      savedItems: Product[];
    }
  | {
      type: 'ADD_LOCAL_STORAGE_FAVORITES_LIST';
      list: Product[];
    }
  | {
      type: 'REMOVE_FAVORITE';
      id: string;
    }
  | {
      type: 'REMOVE_CART_ITEM';
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
    case 'ADD_SAVED_ITEM':
      return { ...state, saved: [...state.saved, action.savedItem] };
    case 'REMOVE_SAVED_ITEM':
      return {
        ...state,
        saved: state.saved.filter((item) => item.id !== action.savedItem.id),
      };
    case 'SET_INITIAL_FAVORITES':
      return { ...state, favorites: action.favorites };
    case 'SET_INITIAL_SAVED_ITEMS':
      return { ...state, saved: action.savedItems };
    case 'SET_INITIAL_CART_ITEMS':
      return {
        ...state,
        cartItems: action.cartItems,
      };
    case 'ADD_FAVORITE':
      const exists = state.favorites.find(
        (fav) => fav.id === action.favorite.id,
      );
      if (!exists) {
        return { ...state, favorites: [...state.favorites, action.favorite] };
      } else {
        return {
          ...state,
          favorites: state.favorites.filter(
            (fav) => fav.id !== action.favorite.id,
          ),
        };
      }
    case 'ADD_LOCAL_STORAGE_FAVORITES_LIST':
      return { ...state, favorites: [...state.favorites, ...action.list] };
    case 'REMOVE_FAVORITE':
      return {
        ...state,
        favorites: state.favorites.filter((f) => f.id !== action.id),
      };
    case 'REMOVE_CART_ITEM':
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
