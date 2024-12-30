import React from 'react';
import * as Progress from '@radix-ui/react-progress';
import { UserStats } from '../types/rewards';

interface UserLevelProps {
  stats: UserStats;
}

const POINTS_PER_LEVEL = 1000;

export const UserLevel: React.FC<UserLevelProps> = ({ stats }) => {
  const progress = (stats.points % POINTS_PER_LEVEL) / POINTS_PER_LEVEL * 100;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Level {stats.level}</h2>
        <span className="text-gray-600">{stats.points} points</span>
      </div>
      <Progress.Root 
        className="h-4 overflow-hidden bg-gray-200 rounded-full w-full"
        value={progress}
      >
        <Progress.Indicator
          className="h-full bg-blue-500 transition-transform duration-500"
          style={{ transform: `translateX(-${100 - progress}%)` }}
        />
      </Progress.Root>
      <p className="mt-2 text-sm text-gray-600">
        {POINTS_PER_LEVEL - (stats.points % POINTS_PER_LEVEL)} points to next level
      </p>
    </div>
  );
};