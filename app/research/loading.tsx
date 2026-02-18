import { Skeleton, SkeletonResearchCard } from '../components/Skeleton';

export default function ResearchLoading() {
  return (
    <main className="min-h-screen bg-gray-50">
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
      <section className="pt-32 pb-16 px-4 bg-linear-to-br from-purple-700 via-indigo-700 to-purple-800">
        <div className="max-w-6xl mx-auto text-center">
          <Skeleton className="h-12 w-80 mx-auto mb-4 bg-purple-600/50" />
          <Skeleton className="h-6 w-96 max-w-full mx-auto bg-purple-600/50" />
        </div>
      </section>

      {/* Research Grid Skeleton */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto space-y-8">
          {Array.from({ length: 4 }).map((_, i) => (
            <SkeletonResearchCard key={i} />
          ))}
        </div>
      </section>
    </main>
  );
}
