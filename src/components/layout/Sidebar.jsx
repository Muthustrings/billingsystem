import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';

const Sidebar = () => {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path;
  };
  
  return (
    <div className="w-64 bg-gray-800 dark:bg-gray-900 text-white h-full flex flex-col transition-colors duration-200">
      <div className="p-4 border-b border-gray-700 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-orange-500">BillMaster</span>
        </Link>
        <DarkModeToggle />
      </div>
      
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          <li>
            <Link 
              to="/" 
              className={`flex items-center p-3 rounded-lg ${
                isActive('/') ? 'bg-orange-600' : 'hover:bg-gray-700'
              } transition-colors duration-200`}
            >
              <span className="ml-3">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link 
              to="/customers" 
              className={`flex items-center p-3 rounded-lg ${
                isActive('/customers') ? 'bg-orange-600' : 'hover:bg-gray-700'
              } transition-colors duration-200`}
            >
              <span className="ml-3">Customers</span>
            </Link>
          </li>
          <li>
            <Link 
              to="/orders" 
              className={`flex items-center p-3 rounded-lg ${
                isActive('/orders') ? 'bg-orange-600' : 'hover:bg-gray-700'
              } transition-colors duration-200`}
            >
              <span className="ml-3">Orders</span>
            </Link>
          </li>
          <li>
            <Link 
              to="/create-bill" 
              className={`flex items-center p-3 rounded-lg ${
                isActive('/create-bill') ? 'bg-orange-600' : 'hover:bg-gray-700'
              } transition-colors duration-200`}
            >
              <span className="ml-3">Create Bill</span>
            </Link>
          </li>
        </ul>
      </nav>
      
      <div className="p-4 border-t border-gray-700">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center">
            <span className="font-bold">U</span>
          </div>
          <div className="ml-3">
            <p className="font-medium">User Name</p>
            <p className="text-sm text-gray-400">Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;