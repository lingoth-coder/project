import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaUser } from 'react-icons/fa';

export const Navigation: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="bg-white shadow-md mb-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-8">
            <Link
              to="/"
              className={`flex items-center space-x-2 px-3 py-2 rounded-md ${
                location.pathname === '/' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              <FaHome />
              <span>Feed</span>
            </Link>
            <Link
              to="/dashboard"
              className={`flex items-center space-x-2 px-3 py-2 rounded-md ${
                location.pathname === '/dashboard' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              <FaUser />
              <span>Dashboard</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};