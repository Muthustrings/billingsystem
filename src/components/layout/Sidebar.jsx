import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path;
  };
  
  return (
    <div className="w-64 bg-gray-800 text-white h-full flex flex-col">
      <div className="p-4 border-b border-gray-700">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold">BillMaster</span>
        </Link>
      </div>
      
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          <li>
            <Link 
              to="/" 
              className={`flex items-center p-3 rounded-lg ${
                isActive('/') ? 'bg-blue-600' : 'hover:bg-gray-700'
              }`}
            >
              <span className="ml-3">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link 
              to="/customers" 
              className={`flex items-center p-3 rounded-lg ${
                isActive('/customers') ? 'bg-blue-600' : 'hover:bg-gray-700'
              }`}
            >
              <span className="ml-3">Customers</span>
            </Link>
          </li>
          <li>
            <Link 
              to="/orders" 
              className={`flex items-center p-3 rounded-lg ${
                isActive('/orders') ? 'bg-blue-600' : 'hover:bg-gray-700'
              }`}
            >
              <span className="ml-3">Orders</span>
            </Link>
          </li>
          <li>
            <Link 
              to="/create-bill" 
              className={`flex items-center p-3 rounded-lg ${
                isActive('/create-bill') ? 'bg-blue-600' : 'hover:bg-gray-700'
              }`}
            >
              <span className="ml-3">Create Bill</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;