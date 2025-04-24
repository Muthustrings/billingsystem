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
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">Dashboard</h1>
      <p className="text-gray-600 mb-6">Overview of your business performance</p>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-gray-500">Total Orders</h2>
              <p className="text-3xl font-bold mt-2">{stats.orders}</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
          </div>
          <p className="text-green-500 mt-4">↑{stats.growth.orders}% from last month</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-gray-500">Total Revenue</h2>
              <p className="text-3xl font-bold mt-2">{stats.revenue}</p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <p className="text-green-500 mt-4">↑{stats.growth.revenue}% from last month</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-gray-500">Total Customers</h2>
              <p className="text-3xl font-bold mt-2">{stats.customers}</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-full">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>
          <p className="text-green-500 mt-4">↑{stats.growth.customers}% from last month</p>
        </div>
      </div>
      
      {/* Pie Charts */}
      <h2 className="text-xl font-semibold mb-4">Business Analytics</h2>
      <PieCharts />

      {/* Recent Orders & Customers */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b">
            <h2 className="text-lg font-semibold">Recent Orders</h2>
          </div>
          <div className="p-6">
            <table className="min-w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left pb-3">ORDER ID</th>
                  <th className="text-left pb-3">CUSTOMER</th>
                  <th className="text-left pb-3">DATE</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map(order => (
                  <tr key={order.id} className="border-b">
                    <td className="py-3">{order.id}</td>
                    <td className="py-3">{order.customer}</td>
                    <td className="py-3">{order.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Link to="/orders" className="text-blue-600 mt-4 inline-block">
              View all orders →
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b">
            <h2 className="text-lg font-semibold">Recent Customers</h2>
          </div>
          <div className="p-6">
            <table className="min-w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left pb-3">CUSTOMER</th>
                  <th className="text-left pb-3">PHONE</th>
                  <th className="text-left pb-3">ORDERS</th>
                </tr>
              </thead>
              <tbody>
                {recentCustomers.map(customer => (
                  <tr key={customer.name} className="border-b">
                    <td className="py-3">{customer.name}</td>
                    <td className="py-3">{customer.phone}</td>
                    <td className="py-3">{customer.orders}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Link to="/customers" className="text-blue-600 mt-4 inline-block">
              View all customers →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;