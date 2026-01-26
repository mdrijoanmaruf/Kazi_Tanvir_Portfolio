import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

// POST - Add new subscriber
export async function POST(request: Request) {
  try {
    const client = await clientPromise;
    const db = client.db('portfolio');
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Check if already subscribed
    const existing = await db.collection('subscribers').findOne({ email: email.toLowerCase() });
    if (existing) {
      return NextResponse.json(
        { error: 'Already subscribed' },
        { status: 400 }
      );
    }

    const subscriber = await db.collection('subscribers').insertOne({
      email: email.toLowerCase(),
      createdAt: new Date(),
    });
    return NextResponse.json({ subscriber }, { status: 201 });
  } catch (error) {
    console.error('Error adding subscriber:', error);
    return NextResponse.json(
      { error: 'Failed to subscribe' },
      { status: 500 }
    );
  }
}
