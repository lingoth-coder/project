import { Post } from '../types/post';

export const initialPosts: Post[] = [
  {
    id: '1',
    author: {
      id: '1',
      name: 'Sarah Johnson',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    },
    content: 'Just launched my new portfolio website! Check it out and let me know what you think 🚀',
    createdAt: '2024-01-20T10:00:00Z',
    likes: 24,
    comments: 8,
    shares: 3,
    isLiked: false,
    commentsList: [],
  },
  {
    id: '2',
    author: {
      id: '2',
      name: 'Alex Chen',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
    },
    content: 'Learning TypeScript has been a game-changer for my development workflow. The type safety is absolutely worth the initial learning curve! 💡',
    createdAt: '2024-01-20T09:30:00Z',
    likes: 45,
    comments: 12,
    shares: 6,
    isLiked: false,
    commentsList: [],
  },
];