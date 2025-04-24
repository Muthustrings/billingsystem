import React from 'react';
import { Link } from 'react-router-dom';

const RecentOrders = () => {
  const orders = [
    { id: '#ORD-2023-1', customer: 'Raj Kumar', date: '15 Oct 2023' },
    { id: '#ORD-2023-2', customer: 'Priya Singh', date: '14 Oct 2023' },
    { id: '#ORD-2023-3', customer: 'Amit Patel', date: '13 Oct 2023' }
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b">
              <th className="px-4 py-2 text-left">ORDER ID</th>
              <th className="px-4 py-2 text-left">CUSTOMER</th>
              <th className="px-4 py-2 text-left">DATE</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b">
                <td className="px-4 py-3">{order.id}</td>
                <td className="px-4 py-3">{order.customer}</td>
                <td className="px-4 py-3">{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <div className="flex">
          <button className="p-2 border rounded-l">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          <button className="p-2 border rounded-r">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
        <Link to="/orders" className="text-blue-600 hover:underline">
          View all orders
        </Link>
      </div>
    </div>
  );
};

export default RecentOrders;