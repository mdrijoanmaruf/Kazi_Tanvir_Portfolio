'use client';

import { useEffect, useState } from 'react';

interface Research {
  _id: string;
  title: string;
  description: string;
  publishedAt: string;
  createdAt: string;
}

export default function ResearchPage() {
  const [research, setResearch] = useState<Research[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchResearch();
  }, []);

  const fetchResearch = async () => {
    try {
      const response = await fetch('/api/admin/research');
      if (response.ok) {
        const data = await response.json();
        setResearch(data.research || []);
      }
    } catch (error) {
      console.error('Failed to fetch research:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">All Research</h1>
          <p className="text-gray-600 mt-1">Manage your research papers and publications</p>
        </div>
        <a
          href="/admin/research/add"
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-linear-to-r from-purple-600 to-indigo-600 text-white text-sm font-medium rounded-xl hover:shadow-lg transition-all"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Add Research
        </a>
      </div>

      {/* Research List */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
        {loading ? (
          <div className="text-center py-8">
            <div className="w-8 h-8 border-4 border-purple-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
            <p className="text-gray-500 mt-4">Loading research...</p>
          </div>
        ) : research.length === 0 ? (
          <div className="text-center py-12">
            <svg className="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No research papers yet</h3>
            <p className="text-gray-500 mb-4">Get started by adding your first research paper.</p>
            <a
              href="/admin/research/add"
              className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg hover:bg-purple-700 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Add Research
            </a>
          </div>
        ) : (
          <div className="space-y-4">
            {research.map((item) => (
              <div key={item._id} className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                <h3 className="font-medium text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-500 mt-1 line-clamp-2">{item.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
