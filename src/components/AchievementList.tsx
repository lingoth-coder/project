import React from 'react';
import { Achievement } from '../types/rewards';
import clsx from 'clsx';

interface AchievementListProps {
  achievements: Achievement[];
}

export const AchievementList: React.FC<AchievementListProps> = ({ achievements }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {achievements.map((achievement) => (
        <div
          key={achievement.id}
          className={clsx(
            'p-4 rounded-lg border-2',
            achievement.unlocked
              ? 'border-green-500 bg-green-50'
              : 'border-gray-200 bg-gray-50'
          )}
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl">{achievement.icon}</span>
            <div>
              <h3 className="font-semibold">{achievement.name}</h3>
              <p className="text-sm text-gray-600">{achievement.description}</p>
              <p className="text-sm mt-1">
                {achievement.unlocked ? (
                  <span className="text-green-600">Unlocked!</span>
                ) : (
                  <span className="text-gray-500">
                    {achievement.pointsRequired} points required
                  </span>
                )}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};