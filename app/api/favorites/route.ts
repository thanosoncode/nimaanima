import { Item, Product } from '@/app/utils/types';
import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { NextResponse, type NextRequest } from 'next/server';

export async function POST(request: NextRequest, response: NextResponse) {
  const { userId, favorite } = (await request.json()) as {
    userId: string;
    favorite: Item;
  };

  if (!userId || !favorite) {
    return NextResponse.json(
      { message: 'Invalid user id and/or favorite' },
      { status: 400 },
    );
  }

  try {
    const user = await prisma.user.findFirst({
      where: { id: userId },
    });

    if (user) {
      const updated = await prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          favorites: [...user.favorites, favorite],
        },
      });
      return NextResponse.json(updated, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json(error);
  }

  return NextResponse.json(
    { message: 'Something went wrong' },
    { status: 400 },
  );
}

export async function DELETE(request: NextRequest, response: NextResponse) {
  const { userId, favorite } = (await request.json()) as {
    userId: string;
    favorite: Item;
  };

  if (!userId || !favorite) {
    return NextResponse.json(
      { message: 'Invalid user id and/or favorite' },
      { status: 400 },
    );
  }

  try {
    const user = await prisma.user.findFirst({
      where: { id: userId },
    });

    if (user) {
      const newFavorites = user.favorites.filter((f) => f.id !== favorite.id);
      const updated = await prisma.user.update({
        where: {
          id: userId,
        },
        data: {
          favorites: [...newFavorites],
        },
      });
      return NextResponse.json(updated, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json(error);
  }

  return NextResponse.json(
    { message: 'Something went wrong' },
    { status: 400 },
  );
}
