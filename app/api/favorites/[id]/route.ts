import { prisma } from '@/lib/prisma';
import { NextResponse, type NextRequest } from 'next/server';

export async function GET(request: NextRequest, response: NextResponse) {
  console.log('request.params', request.url);
  const userId = request.url.split('favorites/')[1];

  console.log('userId', userId);

  if (!userId) {
    return NextResponse.json({ message: 'Invalid id' }, { status: 400 });
  }

  try {
    const user = await prisma.user.findFirst({
      where: { id: userId },
    });

    if (user) {
      return NextResponse.json(user.favorites, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json(error);
  }

  return NextResponse.json(
    { message: 'Something went wrong' },
    { status: 400 }
  );
}
