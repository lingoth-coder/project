export interface Achievement {
  id: string;
  name: string;
  description: string;
  pointsRequired: number;
  icon: string;
  unlocked: boolean;
}

export interface UserStats {
  points: number;
  level: number;
  posts: number;
  comments: number;
  likes: number;
  shares: number;
}

export interface Reward {
  id: string;
  name: string;
  description: string;
  pointsCost: number;
  available: boolean;
}