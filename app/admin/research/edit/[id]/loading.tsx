import { Skeleton, SkeletonForm } from '../../../../components/Skeleton';

export default function EditResearchLoading() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Skeleton className="h-10 w-10 rounded-lg" />
        <div>
          <Skeleton className="h-8 w-44 mb-2" />
          <Skeleton className="h-5 w-64" />
        </div>
      </div>

      {/* Form Card */}
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl">
        <SkeletonForm />
      </div>
    </div>
  );
}
