import { Skeleton } from '../components/Skeleton';

export default function LoginLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800 flex items-center justify-center p-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative w-full max-w-md">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/20">
          {/* Logo/Title Skeleton */}
          <div className="text-center mb-8">
            <Skeleton className="h-12 w-12 mx-auto mb-4 rounded-xl bg-purple-700/50" />
            <Skeleton className="h-8 w-32 mx-auto mb-2 bg-purple-700/50" />
            <Skeleton className="h-4 w-48 mx-auto bg-purple-700/50" />
          </div>

          {/* Form Skeleton */}
          <div className="space-y-6">
            <div>
              <Skeleton className="h-4 w-16 mb-2 bg-purple-700/50" />
              <Skeleton className="h-12 w-full rounded-xl bg-purple-700/30" />
            </div>
            <div>
              <Skeleton className="h-4 w-20 mb-2 bg-purple-700/50" />
              <Skeleton className="h-12 w-full rounded-xl bg-purple-700/30" />
            </div>
            <div className="flex items-center justify-between">
              <Skeleton className="h-4 w-24 bg-purple-700/50" />
              <Skeleton className="h-4 w-32 bg-purple-700/50" />
            </div>
            <Skeleton className="h-12 w-full rounded-xl bg-purple-700/50" />
          </div>

          {/* Register Link Skeleton */}
          <div className="mt-8 text-center">
            <Skeleton className="h-4 w-48 mx-auto bg-purple-700/50" />
          </div>
        </div>
      </div>
    </div>
  );
}
