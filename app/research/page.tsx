import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import clientPromise from '@/lib/mongodb';

interface Research {
  _id: string;
  title: string;
  description: string;
  abstract?: string;
  link?: string;
  publishedAt?: Date;
  journal?: string;
  authors?: string[];
  image?: string;
  createdAt: Date;
}

async function getResearch(): Promise<Research[]> {
  try {
    const client = await clientPromise;
    const db = client.db('portfolio');
    const research = await db
      .collection('research')
      .find({})
      .sort({ publishedAt: -1, createdAt: -1 })
      .toArray();
    return JSON.parse(JSON.stringify(research));
  } catch (error) {
    console.error('Failed to fetch research:', error);
    return [];
  }
}

export default async function ResearchPage() {
  const research = await getResearch();

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-linear-to-br from-purple-700 via-indigo-700 to-purple-800">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Research & Publications
          </h1>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Explore my academic research and published papers in various fields of study
          </p>
        </div>
      </section>

      {/* Research Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {research.length === 0 ? (
            <div className="text-center py-20">
              <svg
                className="w-16 h-16 mx-auto mb-4 text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <p className="text-gray-500 text-lg">No research publications yet.</p>
              <p className="text-gray-400 mt-2">Check back later for updates!</p>
            </div>
          ) : (
            <div className="grid gap-8">
              {research.map((item) => (
                <article
                  key={item._id}
                  className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="md:flex">
                    {/* Image */}
                    {item.image && (
                      <div className="md:w-72 md:shrink-0">
                        <div className="relative h-48 md:h-full w-full">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    )}

                    {/* Content */}
                    <div className="flex-1 p-6 md:p-8">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        {item.journal && (
                          <span className="inline-flex items-center gap-1 px-3 py-1 bg-purple-100 text-purple-700 text-sm font-medium rounded-full">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                            {item.journal}
                          </span>
                        )}
                        {item.publishedAt && (
                          <span className="inline-flex items-center gap-1 text-sm text-gray-500">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {new Date(item.publishedAt).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            })}
                          </span>
                        )}
                      </div>

                      <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                        {item.title}
                      </h2>

                      {item.authors && item.authors.length > 0 && (
                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                          <span>{item.authors.join(', ')}</span>
                        </div>
                      )}

                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {item.description}
                      </p>

                      {item.abstract && (
                        <details className="mb-4 group">
                          <summary className="cursor-pointer text-sm font-medium text-purple-600 hover:text-purple-700 transition-colors">
                            View Abstract
                          </summary>
                          <p className="mt-2 text-sm text-gray-600 pl-4 border-l-2 border-purple-200">
                            {item.abstract}
                          </p>
                        </details>
                      )}

                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-purple-600 to-indigo-600 text-white text-sm font-medium rounded-xl hover:shadow-lg transition-all"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          Read Paper
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-linear-to-r from-purple-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Interested in Collaboration?
          </h2>
          <p className="text-purple-100 mb-8 text-lg">
            I&apos;m always open to discussing research opportunities and collaborations.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-purple-700 font-semibold rounded-xl hover:shadow-lg transition-all"
          >
            Get in Touch
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}