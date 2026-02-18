import { Skeleton, SkeletonAdminTable } from '../../components/Skeleton';

export default function SubscribersLoading() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <Skeleton className="h-8 w-40 mb-2" />
          <Skeleton className="h-5 w-64" />
        </div>
        <Skeleton className="h-12 w-48 rounded-xl" />
      </div>

      {/* Subscribers Table */}
      <SkeletonAdminTable rows={10} columns={4} />
    </div>
  );
}
