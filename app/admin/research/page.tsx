'use client';

import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

interface Research {
  _id: string;
  title: string;
  description: string;
  abstract: string;
  link: string;
  journal: string;
  authors: string[];
  image: string;
  publishedAt: string;
  createdAt: string;
}

export default function ResearchPage() {
  const [research, setResearch] = useState<Research[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleteLoading, setDeleteLoading] = useState<string | null>(null);

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

  const handleDelete = async (researchId: string, title: string) => {
    const result = await Swal.fire({
      title: 'Delete Research?',
      text: `Are you sure you want to delete "${title}"? This action cannot be undone.`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#dc2626',
      cancelButtonColor: '#6b7280',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
    });

    if (!result.isConfirmed) return;

    setDeleteLoading(researchId);
    try {
      const response = await fetch(`/api/admin/research/${researchId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setResearch(research.filter((r) => r._id !== researchId));
        Swal.fire({
          icon: 'success',
          title: 'Deleted!',
          text: 'Research has been deleted successfully.',
          timer: 1500,
          showConfirmButton: false,
        });
      } else {
        const data = await response.json();
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: data.error || 'Failed to delete research',
          confirmButtonColor: '#7c3aed',
        });
      }
    } catch (error) {
      console.error('Failed to delete research:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to delete research',
        confirmButtonColor: '#7c3aed',
      });
    } finally {
      setDeleteLoading(null);
    }
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return 'Not published';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">All Research</h1>
          <p className="text-gray-600 mt-1">Manage your research papers and publications</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-purple-50 rounded-lg">
            <span className="text-sm text-gray-600">Total:</span>
            <span className="text-sm font-bold text-purple-700">{research.length} papers</span>
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
              <div key={item._id} className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600 line-clamp-2 mb-3">{item.description}</p>
                    
                    <div className="flex flex-wrap items-center gap-3 text-sm">
                      {item.journal && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-purple-50 text-purple-700 rounded-full">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                          {item.journal}
                        </span>
                      )}
                      <span className="inline-flex items-center gap-1 text-gray-500">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {formatDate(item.publishedAt)}
                      </span>
                      {item.authors && item.authors.length > 0 && (
                        <span className="inline-flex items-center gap-1 text-gray-500">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                          {item.authors.slice(0, 2).join(', ')}{item.authors.length > 2 ? ` +${item.authors.length - 2}` : ''}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 lg:shrink-0">
                    <a
                      href={`/admin/research/edit/${item._id}`}
                      className="inline-flex items-center gap-1 px-3 py-2 text-xs font-medium text-purple-700 bg-purple-100 rounded-lg hover:bg-purple-200 transition-colors"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                      Edit
                    </a>
                    <button
                      onClick={() => handleDelete(item._id, item.title)}
                      disabled={deleteLoading === item._id}
                      className="inline-flex items-center gap-1 px-3 py-2 text-xs font-medium text-red-700 bg-red-100 rounded-lg hover:bg-red-200 disabled:opacity-50 transition-colors"
                    >
                      {deleteLoading === item._id ? (
                        <div className="w-3.5 h-3.5 border-2 border-red-700 border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      )}
                      Delete
                    </button>
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-500 hover:text-purple-600 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
