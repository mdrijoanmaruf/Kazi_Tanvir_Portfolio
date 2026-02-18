'use client';

import React from 'react';

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className = '' }: SkeletonProps) {
  return (
    <div
      className={`animate-pulse bg-gray-200 rounded ${className}`}
    />
  );
}

export function SkeletonText({ className = '', lines = 1 }: SkeletonProps & { lines?: number }) {
  return (
    <div className={className}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          className={`h-4 ${i === lines - 1 ? 'w-3/4' : 'w-full'} ${i > 0 ? 'mt-2' : ''}`}
        />
      ))}
    </div>
  );
}

export function SkeletonCard() {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <Skeleton className="h-48 w-full rounded-none" />
      <div className="p-6">
        <Skeleton className="h-4 w-20 mb-3" />
        <Skeleton className="h-6 w-3/4 mb-3" />
        <SkeletonText lines={2} />
      </div>
    </div>
  );
}

export function SkeletonProjectCard() {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden group">
      <Skeleton className="h-52 w-full rounded-none" />
      <div className="p-5">
        <Skeleton className="h-4 w-24 mb-2" />
        <Skeleton className="h-6 w-3/4" />
      </div>
    </div>
  );
}

export function SkeletonResearchCard() {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="md:flex">
        <Skeleton className="h-48 md:w-64 w-full rounded-none" />
        <div className="p-6 flex-1">
          <Skeleton className="h-4 w-32 mb-3" />
          <Skeleton className="h-7 w-3/4 mb-4" />
          <SkeletonText lines={3} className="mb-4" />
          <div className="flex gap-2">
            <Skeleton className="h-6 w-16 rounded-full" />
            <Skeleton className="h-6 w-20 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function SkeletonTableRow({ columns = 4 }: { columns?: number }) {
  return (
    <tr className="border-b border-gray-100">
      {Array.from({ length: columns }).map((_, i) => (
        <td key={i} className="py-4 px-4">
          <Skeleton className="h-4 w-full" />
        </td>
      ))}
    </tr>
  );
}

export function SkeletonStatCard() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <Skeleton className="h-4 w-24 mb-2" />
          <Skeleton className="h-8 w-16" />
        </div>
        <Skeleton className="h-14 w-14 rounded-xl" />
      </div>
    </div>
  );
}

export function SkeletonAdminTable({ rows = 5, columns = 4 }: { rows?: number; columns?: number }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-6 border-b border-gray-100">
        <Skeleton className="h-7 w-48" />
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              {Array.from({ length: columns }).map((_, i) => (
                <th key={i} className="py-4 px-4 text-left">
                  <Skeleton className="h-4 w-20" />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: rows }).map((_, i) => (
              <SkeletonTableRow key={i} columns={columns} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function SkeletonHero() {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Skeleton className="h-12 w-64 mx-auto mb-6 bg-purple-700/50" />
        <Skeleton className="h-6 w-96 mx-auto bg-purple-700/50" />
      </div>
    </section>
  );
}

export function SkeletonForm() {
  return (
    <div className="space-y-6">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i}>
          <Skeleton className="h-4 w-24 mb-2" />
          <Skeleton className="h-12 w-full rounded-lg" />
        </div>
      ))}
      <Skeleton className="h-12 w-32 rounded-lg" />
    </div>
  );
}
