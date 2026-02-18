import { Skeleton, SkeletonAdminTable } from '../../components/Skeleton';

export default function UsersLoading() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <Skeleton className="h-8 w-48 mb-2" />
          <Skeleton className="h-5 w-72" />
        </div>
        <Skeleton className="h-12 w-64 rounded-xl" />
      </div>

      {/* Users Table */}
      <SkeletonAdminTable rows={8} columns={5} />
    </div>
  );
}
