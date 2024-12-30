import React from 'react';
import { UserStats } from '../types/rewards';

interface EngagementStatsProps {
  stats: UserStats;
}

export const EngagementStats: React.FC<EngagementStatsProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <StatCard title="Posts" value={stats.posts} />
      <StatCard title="Comments" value={stats.comments} />
      <StatCard title="Likes" value={stats.likes} />
      <StatCard title="Shares" value={stats.shares} />
    </div>
  );
};

const StatCard: React.FC<{ title: string; value: number }> = ({ title, value }) => (
  <div className="bg-white p-4 rounded-lg shadow-md text-center">
    <h3 className="text-gray-600 text-sm">{title}</h3>
    <p className="text-2xl font-bold mt-1">{value}</p>
  </div>
);