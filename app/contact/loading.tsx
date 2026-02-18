import { Skeleton } from '../components/Skeleton';

export default function ContactLoading() {
  return (
    <div className="min-h-screen">
      {/* Header Skeleton */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Skeleton className="h-10 w-32" />
            <div className="hidden md:flex items-center space-x-8">
              {Array.from({ length: 5 }).map((_, i) => (
                <Skeleton key={i} className="h-4 w-16" />
              ))}
            </div>
            <Skeleton className="h-10 w-24 rounded-full" />
          </div>
        </div>
      </header>

      {/* Hero Section Skeleton */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Skeleton className="h-12 w-64 mx-auto mb-6 bg-purple-700/50" />
          <Skeleton className="h-6 w-96 max-w-full mx-auto bg-purple-700/50" />
        </div>
      </section>

      {/* Contact Form Section Skeleton */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info Skeleton */}
            <div className="space-y-8">
              <div>
                <Skeleton className="h-8 w-48 mb-4" />
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-3/4 mt-2" />
              </div>
              <div className="space-y-6">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="flex items-center space-x-4">
                    <Skeleton className="h-14 w-14 rounded-xl" />
                    <div className="flex-1">
                      <Skeleton className="h-4 w-20 mb-2" />
                      <Skeleton className="h-5 w-48" />
                    </div>
                  </div>
                ))}
              </div>
              {/* Social Links Skeleton */}
              <div className="pt-6">
                <Skeleton className="h-6 w-32 mb-4" />
                <div className="flex space-x-4">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <Skeleton key={i} className="h-12 w-12 rounded-full" />
                  ))}
                </div>
              </div>
            </div>

            {/* Form Skeleton */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <Skeleton className="h-8 w-48 mb-8" />
              <div className="space-y-6">
                <div>
                  <Skeleton className="h-4 w-20 mb-2" />
                  <Skeleton className="h-12 w-full rounded-xl" />
                </div>
                <div>
                  <Skeleton className="h-4 w-24 mb-2" />
                  <Skeleton className="h-12 w-full rounded-xl" />
                </div>
                <div>
                  <Skeleton className="h-4 w-20 mb-2" />
                  <Skeleton className="h-32 w-full rounded-xl" />
                </div>
                <Skeleton className="h-14 w-full rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
