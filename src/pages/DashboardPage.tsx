import React from 'react';
import { UserLevel } from '../components/UserLevel';
import { AchievementList } from '../components/AchievementList';
import { RewardsList } from '../components/RewardsList';
import { EngagementStats } from '../components/EngagementStats';
import { UserStats, Reward } from '../types/rewards';

interface DashboardPageProps {
  stats: UserStats;
  achievements: any[];
  rewards: Reward[];
  onRedeem: (reward: Reward) => void;
}

export const DashboardPage: React.FC<DashboardPageProps> = ({
  stats,
  achievements,
  rewards,
  onRedeem,
}) => {
  return (
    <div className="max-w-4xl mx-auto px-4">
      <h1 className="text-3xl font-bold text-center mb-8">
        Your Dashboard
      </h1>

      <div className="space-y-8">
        <UserLevel stats={stats} />
        
        <section>
          <h2 className="text-2xl font-bold mb-4">Your Activity</h2>
          <EngagementStats stats={stats} />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Achievements</h2>
          <AchievementList achievements={achievements} />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Available Rewards</h2>
          <RewardsList 
            rewards={rewards} 
            userPoints={stats.points} 
            onRedeem={onRedeem}
          />
        </section>
      </div>
    </div>
  );
};