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
      return { userId, product, isFavorite: true };
    }
  }
  return { userId, product, isFavorite: previousState.isFavorite };
};
