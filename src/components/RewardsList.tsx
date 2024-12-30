import React from 'react';
import { Reward } from '../types/rewards';

interface RewardsListProps {
  rewards: Reward[];
  userPoints: number;
  onRedeem: (reward: Reward) => void;
}

export const RewardsList: React.FC<RewardsListProps> = ({ 
  rewards, 
  userPoints,
  onRedeem 
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {rewards.map((reward) => (
        <div
          key={reward.id}
          className="p-4 rounded-lg border-2 border-purple-200 bg-purple-50"
        >
          <h3 className="font-semibold">{reward.name}</h3>
          <p className="text-sm text-gray-600 mb-2">{reward.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-purple-600 font-medium">
              {reward.pointsCost} points
            </span>
            <button
              onClick={() => onRedeem(reward)}
              disabled={userPoints < reward.pointsCost || !reward.available}
              className="px-4 py-2 rounded bg-purple-600 text-white disabled:bg-gray-400"
            >
              Redeem
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};