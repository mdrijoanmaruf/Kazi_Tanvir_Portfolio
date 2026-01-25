import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

// GET all research (public)
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('portfolio');

    const research = await db
      .collection('research')
      .find({})
      .sort({ publishedAt: -1, createdAt: -1 })
      .toArray();

    return NextResponse.json({ research });
  } catch (error) {
    console.error('Failed to fetch research:', error);
    return NextResponse.json(
      { error: 'Failed to fetch research' },
      { status: 500 }
    );
  }
}
