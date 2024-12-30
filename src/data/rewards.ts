import { Reward } from '../types/rewards';

export const rewards: Reward[] = [
  {
    id: 'premium-week',
    name: 'Premium Week',
    description: '7 days of premium features',
    pointsCost: 1000,
    available: true,
  },
  {
    id: 'profile-badge',
    name: 'Special Badge',
    description: 'Exclusive profile badge',
    pointsCost: 500,
    available: true,
  },
  {
    id: 'custom-theme',
    name: 'Custom Theme',
    description: 'Unlock a custom profile theme',
    pointsCost: 750,
    available: true,
  },
];