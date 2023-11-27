'use server';

import { Product } from '@/app/utils/types';
import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export const addToFavoritesAction = async (
  previousState: { product: Product; userId: string; isFavorite: boolean },
  formData: FormData,
): Promise<{ product: Product; userId: string; isFavorite: boolean }> => {
  const { userId, product } = previousState;
  const user = await prisma.user.findFirst({
    where: { id: userId },
  });

  if (user) {
    if (user.favorites.find((fav) => fav.id === product.id)) {
      const newFavorites = user.favorites.filter((f) => f.id !== product.id);
      await prisma.user.update({
        where: {
          id: userId,
        },
        data: {
          favorites: newFavorites,
        },
      });
      revalidatePath('/');
      revalidatePath('/favorites');
      return { userId, product, isFavorite: false };
    } else {
      await prisma.user.update({
        where: {
          id: userId,
        },
        data: {
          favorites: [...user.favorites, product],
        },
      });
      revalidatePath('/');
      revalidatePath('/favorites');
      return { userId, product, isFavorite: true };
    }
  }
  return { userId, product, isFavorite: previousState.isFavorite };
};

export const saveForLaterDbAction = async (
  previousState: { product: Product; userId: string },
  formData: FormData,
): Promise<{ product: Product; userId: string }> => {
  const { userId, product } = previousState;
  const user = await prisma.user.findFirst({
    where: { id: userId },
  });

  if (user) {
    const newCartItems = user.cartItems.filter(
      (item) => item.id !== product.id,
    );
    await prisma.user.update({
      where: { id: user.id },
      data: {
        cartItems: newCartItems,
        saved: [...user.saved, product],
      },
    });
    revalidatePath('/');
    revalidatePath(`/products/${product.id}`);
    revalidatePath('/cart');
    return { userId, product };
  }
  return { userId, product };
};

export const removeFromSavedDbAction = async (
  previousState: { product: Product; userId: string },
  formData: FormData,
): Promise<{ product: Product; userId: string }> => {
  const { userId, product } = previousState;
  const user = await prisma.user.findFirst({
    where: { id: userId },
  });

  if (user) {
    const newSavedItems = user.saved.filter((item) => item.id !== product.id);
    await prisma.user.update({
      where: { id: user.id },
      data: {
        saved: newSavedItems,
      },
    });
    revalidatePath('/');
    revalidatePath(`/products/${product.id}`);
    revalidatePath('/cart');
    return { userId, product };
  }
  return { userId, product };
};

export const addToCartAction = async (
  previousState: { product: Product; userId: string },
  formData: FormData,
): Promise<{ product: Product; userId: string }> => {
  const { userId, product } = previousState;
  const user = await prisma.user.findFirst({
    where: { id: userId },
  });

  if (user) {
    await prisma.user.update({
      where: { id: user.id },
      data: {
        cartItems: [...user.cartItems, product],
      },
    });
    revalidatePath('/');
    revalidatePath(`/products/${product.id}`);
    revalidatePath('/favorites');
    revalidatePath('/cart');
    return { userId, product };
  }
  return { userId, product };
};

export const removeCartItemAction = async (
  previousState: { product: Product; userId: string },
  formData: FormData,
): Promise<{ product: Product; userId: string }> => {
  const { userId, product } = previousState;
  const user = await prisma.user.findFirst({
    where: { id: userId },
  });

  if (user) {
    const newCartItems = user.cartItems.filter(
      (item) => item.id !== product.id,
    );
    await prisma.user.update({
      where: { id: user.id },
      data: {
        cartItems: newCartItems,
      },
    });
    revalidatePath('/');
    revalidatePath(`/products/${product.id}`);
    revalidatePath('/cart');
    return { userId, product };
  }
  return { userId, product };
};

export const moveToCartFromSavedAction = async (
  previousState: { product: Product; userId: string },
  formData: FormData,
): Promise<{ product: Product; userId: string }> => {
  const { userId, product } = previousState;
  const user = await prisma.user.findFirst({
    where: { id: userId },
  });

  if (user) {
    const newSavedItems = user.saved.filter((item) => item.id !== product.id);
    await prisma.user.update({
      where: { id: user.id },
      data: {
        saved: newSavedItems,
        cartItems: [...user.cartItems, product],
      },
    });
    revalidatePath('/');
    revalidatePath(`/products/${product.id}`);
    revalidatePath('/cart');
    return { userId, product };
  }
  return { userId, product };
};

export const moveToFavoritesFromSavedAction = async (
  previousState: { product: Product; userId: string },
  formData: FormData,
): Promise<{ product: Product; userId: string }> => {
  const { userId, product } = previousState;
  const user = await prisma.user.findFirst({
    where: { id: userId },
  });

  if (user) {
    const newSavedItems = user.saved.filter((item) => item.id !== product.id);
    await prisma.user.update({
      where: { id: user.id },
      data: {
        saved: newSavedItems,
        favorites: [...user.favorites, product],
      },
    });
    revalidatePath('/');
    revalidatePath(`/products/${product.id}`);
    revalidatePath('/favorites');
    revalidatePath('/cart');
    return { userId, product };
  }
  return { userId, product };
};
