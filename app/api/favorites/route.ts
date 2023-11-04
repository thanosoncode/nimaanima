import { prisma } from '@/lib/prisma';
import { NextResponse, type NextRequest } from 'next/server';

export async function POST(request: NextRequest, response: NextResponse) {
  const { userId, favoriteId } = (await request.json()) as {
    userId: string;
    favoriteId: string;
  };

  if (!userId || !favoriteId) {
    return NextResponse.json(
      { message: 'Missing user id and/or favorite id' },
      { status: 400 }
    );
  }

  try {
    const user = await prisma.user.findFirst({
      where: { id: userId },
    });

    if (user) {
      const updated = await prisma.user.update({
        where: {
          id: userId,
        },
        data: {
          favorites: [...user.favorites, favoriteId],
        },
      });
      return NextResponse.json(updated, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json(error);
  }

  return NextResponse.json(
    { message: 'Something went wrong' },
    { status: 400 }
  );
}

export async function DELETE(request: NextRequest, response: NextResponse) {
  const { userId, favoriteId } = (await request.json()) as {
    userId: string;
    favoriteId: string;
  };

  if (!userId || !favoriteId) {
    return NextResponse.json(
      { message: 'Missing user id and/or favorite id' },
      { status: 400 }
    );
  }

  try {
    const user = await prisma.user.findFirst({
      where: { id: userId },
    });

    if (user) {
      const newFavorites = user.favorites.filter((f) => f !== favoriteId);

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
    { status: 400 }
  );
}
