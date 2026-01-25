import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../auth/[...nextauth]/route';
import clientPromise from '@/lib/mongodb';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const client = await clientPromise;
    const db = client.db('portfolio');
    
    const research = await db.collection('research').find({}).sort({ createdAt: -1 }).toArray();

    return NextResponse.json({ research });
  } catch (error) {
    console.error('Failed to fetch research:', error);
    return NextResponse.json({ error: 'Failed to fetch research' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || session.user?.role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await req.json();
    const { title, description, abstract, link, publishedAt, journal, authors } = body;

    if (!title || !description) {
      return NextResponse.json({ error: 'Title and description are required' }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db('portfolio');

    const result = await db.collection('research').insertOne({
      title,
      description,
      abstract: abstract || '',
      link: link || '',
      publishedAt: publishedAt ? new Date(publishedAt) : null,
      journal: journal || '',
      authors: authors || [],
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return NextResponse.json({ 
      message: 'Research created successfully',
      researchId: result.insertedId 
    }, { status: 201 });
  } catch (error) {
    console.error('Failed to create research:', error);
    return NextResponse.json({ error: 'Failed to create research' }, { status: 500 });
  }
}
