import React, { useState } from 'react';

const Orders = () => {
  const [orders] = useState([
    { 
      id: '#ORD-2023-1', 
      customer: 'Raj Kumar', 
      date: '15 Oct 2023',
      amount: '₹5,250.00',
      status: 'Paid'
    },
    { 
      id: '#ORD-2023-2', 
      customer: 'Priya Singh', 
      date: '14 Oct 2023',
      amount: '₹3,800.00',
      status: 'Pending'
    },
    { 
      id: '#ORD-2023-3', 
      customer: 'Amit Patel', 
      date: '13 Oct 2023',
      amount: '₹2,100.00',
      status: 'Paid'
    }
  ]);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold mb-2">Orders</h1>
          <p className="text-gray-600">Manage your orders and invoices</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Create Order
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-4 flex justify-between">
          <div className="relative w-64">
            <input
              type="text"
              placeholder="Search orders..."
              className="w-full p-2 pl-10 border rounded"
            />
            <svg className="w-5 h-5 text-gray-400 absolute left-3 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <div className="flex space-x-2">
            <select className="border rounded p-2">
              <option>All Statuses</option>
              <option>Paid</option>
              <option>Pending</option>
            </select>
            <select className="border rounded p-2">
              <option>Last 30 days</option>
              <option>Last 90 days</option>
              <option>This year</option>
            </select>
          </div>
        </div>
        
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-50 border-b">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">{order.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{order.customer}</td>
                <td className="px-6 py-4 whitespace-nowrap">{order.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">{order.amount}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    order.status === 'Paid' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="text-blue-600 hover:text-blue-900 mr-3">View</button>
                  <button className="text-blue-600 hover:text-blue-900">Print</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        <div className="px-6 py-4 flex items-center justify-between border-t">
          <div className="text-sm text-gray-500">
            Showing 1 to 3 of 3 results
          </div>
          <div className="flex">
            <button className="px-3 py-1 border rounded-l-md bg-gray-100">Previous</button>
            <button className="px-3 py-1 border-t border-b border-r bg-blue-600 text-white">1</button>
            <button className="px-3 py-1 border-t border-b border-r rounded-r-md">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;