import React from 'react';
import { Link } from 'react-router-dom';
import PieCharts from '../components/dashboard/PieCharts';

const Dashboard = () => {
  const stats = {
    orders: 124,
    revenue: '₹87,650',
    customers: 45,
    growth: {
      orders: 12,
      revenue: 8,
      customers: 5
    }
  };

  const recentOrders = [
    { id: '#ORD-2023-1', customer: 'Raj Kumar', date: '15 Oct 2023' },
    { id: '#ORD-2023-2', customer: 'Priya Singh', date: '14 Oct 2023' },
    { id: '#ORD-2023-3', customer: 'Amit Patel', date: '13 Oct 2023' }
  ];

  const recentCustomers = [
    { name: 'Raj Kumar', phone: '+91 9876543210', orders: 3, spent: '₹15,750' },
    { name: 'Priya Singh', phone: '+91 9765432109', orders: 2, spent: '₹8,400' },
    { name: 'Amit Patel', phone: '+91 9654321098', orders: 1, spent: '₹3,200' }
  ];

  return (
    <div className="p-6 dark:bg-gray-900 transition-colors duration-200">
      <h1 className="text-2xl font-bold mb-2 dark:text-white">Dashboard</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-6">Overview of your business performance</p>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 transition-colors duration-200">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-gray-500 dark:text-gray-400">Total Orders</h2>
              <p className="text-3xl font-bold mt-2 dark:text-white">{stats.orders}</p>
            </div>
            <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full">
              <svg className="w-8 h-8 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
          </div>
          <p className="text-primary-500 dark:text-primary-400 mt-4">↑{stats.growth.orders}% from last month</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 transition-colors duration-200">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-gray-500 dark:text-gray-400">Total Revenue</h2>
              <p className="text-3xl font-bold mt-2 dark:text-white">{stats.revenue}</p>
            </div>
            <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full">
              <svg className="w-8 h-8 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <p className="text-primary-500 dark:text-primary-400 mt-4">↑{stats.growth.revenue}% from last month</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 transition-colors duration-200">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-gray-500 dark:text-gray-400">Total Customers</h2>
              <p className="text-3xl font-bold mt-2 dark:text-white">{stats.customers}</p>
            </div>
            <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full">
              <svg className="w-8 h-8 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>
          <p className="text-primary-500 dark:text-primary-400 mt-4">↑{stats.growth.customers}% from last month</p>
        </div>
      </div>
      
      {/* Pie Charts */}
      <h2 className="text-xl font-semibold mb-4 dark:text-white">Business Analytics</h2>
      <PieCharts />

      {/* Recent Orders & Customers */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow transition-colors duration-200">
          <div className="px-6 py-4 border-b dark:border-gray-700">
            <h2 className="text-lg font-semibold dark:text-white">Recent Orders</h2>
          </div>
          <div className="p-6">
            <table className="min-w-full">
              <thead>
                <tr className="border-b dark:border-gray-700">
                  <th className="text-left pb-3 dark:text-gray-300">ORDER ID</th>
                  <th className="text-left pb-3 dark:text-gray-300">CUSTOMER</th>
                  <th className="text-left pb-3 dark:text-gray-300">DATE</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map(order => (
                  <tr key={order.id} className="border-b dark:border-gray-700">
                    <td className="py-3 dark:text-gray-300">{order.id}</td>
                    <td className="py-3 dark:text-gray-300">{order.customer}</td>
                    <td className="py-3 dark:text-gray-300">{order.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Link to="/orders" className="text-primary-600 dark:text-primary-400 mt-4 inline-block">
              View all orders →
            </Link>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow transition-colors duration-200">
          <div className="px-6 py-4 border-b dark:border-gray-700">
            <h2 className="text-lg font-semibold dark:text-white">Recent Customers</h2>
          </div>
          <div className="p-6">
            <table className="min-w-full">
              <thead>
                <tr className="border-b dark:border-gray-700">
                  <th className="text-left pb-3 dark:text-gray-300">CUSTOMER</th>
                  <th className="text-left pb-3 dark:text-gray-300">PHONE</th>
                  <th className="text-left pb-3 dark:text-gray-300">ORDERS</th>
                </tr>
              </thead>
              <tbody>
                {recentCustomers.map(customer => (
                  <tr key={customer.name} className="border-b dark:border-gray-700">
                    <td className="py-3 dark:text-gray-300">{customer.name}</td>
                    <td className="py-3 dark:text-gray-300">{customer.phone}</td>
                    <td className="py-3 dark:text-gray-300">{customer.orders}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Link to="/customers" className="text-primary-600 dark:text-primary-400 mt-4 inline-block">
              View all customers →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;