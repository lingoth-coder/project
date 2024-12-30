import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { FaHeart, FaRegHeart, FaComment, FaShare } from 'react-icons/fa';
import { Post } from '../../types/post';

interface PostCardProps {
  post: Post;
  onLike: (postId: string) => void;
  onComment: (postId: string) => void;
  onShare: (postId: string) => void;
}

export const PostCard: React.FC<PostCardProps> = ({
  post,
  onLike,
  onComment,
  onShare,
}) => {
  const timeAgo = formatDistanceToNow(new Date(post.createdAt), { addSuffix: true });

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <div className="flex items-center mb-4">
        <img
          src={post.author.avatar}
          alt={post.author.name}
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <h3 className="font-semibold">{post.author.name}</h3>
          <p className="text-sm text-gray-500">{timeAgo}</p>
        </div>
      </div>
      
      <p className="mb-4">{post.content}</p>

      {post.commentsList && post.commentsList.length > 0 && (
        <div className="mb-4 space-y-3 bg-gray-50 p-3 rounded-lg">
          {post.commentsList.map(comment => (
            <div key={comment.id} className="flex items-start space-x-3">
              <img
                src={comment.author.avatar}
                alt={comment.author.name}
                className="w-8 h-8 rounded-full"
              />
              <div>
                <p className="font-medium">{comment.author.name}</p>
                <p className="text-gray-600">{comment.content}</p>
                <p className="text-xs text-gray-400">
                  {formatDistanceToNow(new Date(comment.createdAt), { addSuffix: true })}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
      
      <div className="flex items-center justify-between border-t pt-3">
        <button
          onClick={() => onLike(post.id)}
          className="flex items-center gap-1 text-gray-600 hover:text-red-500"
        >
          {post.isLiked ? (
            <FaHeart className="text-red-500" />
          ) : (
            <FaRegHeart />
          )}
          <span>{post.likes}</span>
        </button>
        
        <button
          onClick={() => onComment(post.id)}
          className="flex items-center gap-1 text-gray-600 hover:text-blue-500"
        >
          <FaComment />
          <span>{post.comments}</span>
        </button>
        
        <button
          onClick={() => onShare(post.id)}
          className="flex items-center gap-1 text-gray-600 hover:text-green-500"
        >
          <FaShare />
          <span>{post.shares}</span>
        </button>
      </div>
    </div>
  );
};