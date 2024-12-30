import React from 'react';
import { Feed } from '../components/feed/Feed';

interface FeedPageProps {
  onEngagement: (type: 'like' | 'comment' | 'share') => void;
}

export const FeedPage: React.FC<FeedPageProps> = ({ onEngagement }) => {
  return (
    <div className="max-w-4xl mx-auto px-4">
      <h1 className="text-3xl font-bold text-center mb-8">
        Feed
      </h1>
      <Feed onEngagement={onEngagement} />
    </div>
  );
};