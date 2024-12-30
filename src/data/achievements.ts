import { Achievement } from '../types/rewards';

export const achievements: Achievement[] = [
  {
    id: 'first-post',
    name: 'First Post',
    description: 'Create your first post',
    pointsRequired: 10,
    icon: '📝',
    unlocked: false,
  },
  {
    id: 'social-butterfly',
    name: 'Social Butterfly',
    description: 'Make 10 comments',
    pointsRequired: 50,
    icon: '🦋',
    unlocked: false,
  },
  {
    id: 'influencer',
    name: 'Rising Influencer',
    description: 'Reach 100 likes on your posts',
    pointsRequired: 200,
    icon: '⭐',
    unlocked: false,
  },
  {
    id: 'viral',
    name: 'Viral Sensation',
    description: 'Get 50 shares on a single post',
    pointsRequired: 500,
    icon: '🌟',
    unlocked: false,
  },
];