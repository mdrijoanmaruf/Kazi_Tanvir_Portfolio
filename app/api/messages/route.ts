import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

// POST - Send new message
export async function POST(request: Request) {
  try {
    const client = await clientPromise;
    const db = client.db('portfolio');
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    const newMessage = await db.collection('messages').insertOne({
      name,
      email: email.toLowerCase(),
      message,
      isRead: false,
      createdAt: new Date(),
    });
    return NextResponse.json({ message: newMessage }, { status: 201 });
  } catch (error) {
    console.error('Error sending message:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
