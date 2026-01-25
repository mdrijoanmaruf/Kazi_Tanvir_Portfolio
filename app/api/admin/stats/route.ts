import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { connectToDatabase } from '@/lib/db';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { db } = await connectToDatabase();

    // Get stats
    const totalUsers = await db.collection('users').countDocuments();
    const adminUsers = await db.collection('users').countDocuments({ role: 'admin' });
    const totalProjects = await db.collection('projects').countDocuments();
    const totalResearch = await db.collection('research').countDocuments();

    return NextResponse.json({
      totalUsers,
      adminUsers,
      totalProjects,
      totalResearch,
    });
  } catch (error) {
    console.error('Stats error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
