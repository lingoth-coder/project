import React, { useState } from 'react';
import { Post } from '../../types/post';
import { PostCard } from './PostCard';
import { CreatePost } from './CreatePost';
import { ShareDialog } from './ShareDialog';
import { CommentDialog } from './CommentDialog';
import { initialPosts } from '../../data/posts';
import { networkUsers } from '../../data/users';

interface FeedProps {
  onEngagement: (type: 'like' | 'comment' | 'share') => void;
}

export const Feed: React.FC<FeedProps> = ({ onEngagement }) => {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [shareDialogOpen, setShareDialogOpen] = useState(false);
  const [commentDialogOpen, setCommentDialogOpen] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);

  const handleCreatePost = (content: string) => {
    const newPost: Post = {
      id: Date.now().toString(),
      author: {
        id: 'current-user',
        name: 'You',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=You',
      },
      content,
      createdAt: new Date().toISOString(),
      likes: 0,
      comments: 0,
      shares: 0,
      isLiked: false,
      commentsList: [],
    };
    setPosts([newPost, ...posts]);
  };

  const handleLike = (postId: string) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          likes: post.isLiked ? post.likes - 1 : post.likes + 1,
          isLiked: !post.isLiked,
        };
      }
      return post;
    }));
    onEngagement('like');
  };

  const handleComment = (postId: string) => {
    setSelectedPostId(postId);
    setCommentDialogOpen(true);
  };

  const handleCommentSubmit = (content: string) => {
    if (selectedPostId) {
      setPosts(posts.map(post => {
        if (post.id === selectedPostId) {
          const newComment = {
            id: Date.now().toString(),
            author: {
              id: 'current-user',
              name: 'You',
              avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=You',
            },
            content,
            createdAt: new Date().toISOString(),
          };
          return {
            ...post,
            comments: post.comments + 1,
            commentsList: [...post.commentsList, newComment],
          };
        }
        return post;
      }));
      onEngagement('comment');
    }
  };

  const handleShare = (postId: string) => {
    setSelectedPostId(postId);
    setShareDialogOpen(true);
  };

  const handleShareSubmit = (selectedUsers: string[]) => {
    if (selectedPostId) {
      setPosts(posts.map(post => {
        if (post.id === selectedPostId) {
          return {
            ...post,
            shares: post.shares + selectedUsers.length,
          };
        }
        return post;
      }));
      onEngagement('share');
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <CreatePost onSubmit={handleCreatePost} />
      <div className="space-y-4">
        {posts.map(post => (
          <PostCard
            key={post.id}
            post={post}
            onLike={handleLike}
            onComment={handleComment}
            onShare={handleShare}
          />
        ))}
      </div>
      <ShareDialog
        isOpen={shareDialogOpen}
        onClose={() => setShareDialogOpen(false)}
        onShare={handleShareSubmit}
        users={networkUsers}
      />
      <CommentDialog
        isOpen={commentDialogOpen}
        onClose={() => setCommentDialogOpen(false)}
        onSubmit={handleCommentSubmit}
      />
    </div>
  );
};