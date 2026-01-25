import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

// GET single research
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const client = await clientPromise;
    const db = client.db('portfolio');
    
    const research = await db.collection('research').findOne({
      _id: new ObjectId(id),
    });

    if (!research) {
      return NextResponse.json(
        { error: 'Research not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ research });
  } catch (error) {
    console.error('Failed to fetch research:', error);
    return NextResponse.json(
      { error: 'Failed to fetch research' },
      { status: 500 }
    );
  }
}

// UPDATE research
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { title, description, abstract, link, publishedAt, journal, authors, image } = body;

    if (!title || !description) {
      return NextResponse.json(
        { error: 'Title and description are required' },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db('portfolio');

    const result = await db.collection('research').updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          title,
          description,
          abstract: abstract || '',
          link: link || '',
          publishedAt: publishedAt ? new Date(publishedAt) : null,
          journal: journal || '',
          authors: authors || [],
          image: image || '',
          updatedAt: new Date(),
        },
      }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json(
        { error: 'Research not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: 'Research updated successfully' });
  } catch (error) {
    console.error('Failed to update research:', error);
    return NextResponse.json(
      { error: 'Failed to update research' },
      { status: 500 }
    );
  }
}

// DELETE research
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const client = await clientPromise;
    const db = client.db('portfolio');

    const result = await db.collection('research').deleteOne({
      _id: new ObjectId(id),
    });

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { error: 'Research not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: 'Research deleted successfully' });
  } catch (error) {
    console.error('Failed to delete research:', error);
    return NextResponse.json(
      { error: 'Failed to delete research' },
      { status: 500 }
    );
  }
}
