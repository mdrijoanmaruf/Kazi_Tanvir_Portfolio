import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import clientPromise from '@/lib/mongodb';

// Force dynamic rendering to ensure data is fetched on each request
export const dynamic = 'force-dynamic';
export const revalidate = 0;

interface Project {
  _id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  category: string;
  tags: string[];
}

async function getProjects(): Promise<Project[]> {
  try {
    const client = await clientPromise;
    const db = client.db('portfolio');
    const projects = await db.collection('projects').find({}).sort({ createdAt: -1 }).toArray();
    return JSON.parse(JSON.stringify(projects));
  } catch (error) {
    console.error('Failed to fetch projects:', error);
    return [];
  }
}

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-linear-to-br from-purple-900 via-indigo-900 to-purple-800 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            My Projects
          </h1>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            Explore my portfolio of work including web development, machine learning, and data science projects.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {projects.length === 0 ? (
            <div className="text-center py-16">
              <svg className="w-20 h-20 mx-auto mb-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">No Projects Yet</h3>
              <p className="text-gray-600 max-w-md mx-auto">
                Projects will be displayed here once they are added. Check back soon!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <ProjectCard
                  key={project._id}
                  title={project.title}
                  image={project.image || '/img/portfolio/default.jpg'}
                  link={project.link || '#'}
                  category={project.category || 'Web Development'}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}