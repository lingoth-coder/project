import React, { useState } from 'react';
import { User } from '../../types/user';

interface ShareDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onShare: (selectedUsers: string[]) => void;
  users: User[];
}

export const ShareDialog: React.FC<ShareDialogProps> = ({
  isOpen,
  onClose,
  onShare,
  users,
}) => {
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);

  if (!isOpen) return null;

  const handleShare = () => {
    onShare(selectedUsers);
    setSelectedUsers([]);
    onClose();
  };

  const toggleUser = (userId: string) => {
    setSelectedUsers(prev =>
      prev.includes(userId)
        ? prev.filter(id => id !== userId)
        : [...prev, userId]
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Share with</h2>
        
        <div className="max-h-60 overflow-y-auto mb-4">
          {users.map(user => (
            <div
              key={user.id}
              className="flex items-center p-2 hover:bg-gray-50 rounded cursor-pointer"
              onClick={() => toggleUser(user.id)}
            >
              <input
                type="checkbox"
                checked={selectedUsers.includes(user.id)}
                onChange={() => toggleUser(user.id)}
                className="mr-3"
              />
              <img
                src={user.avatar}
                alt={user.name}
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <p className="font-semibold">{user.name}</p>
                <p className="text-sm text-gray-500">{user.username}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleShare}
            disabled={selectedUsers.length === 0}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300"
          >
            Share
          </button>
        </div>
      </div>
    </div>
  );
};