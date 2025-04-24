import React, { useState } from 'react';

const Orders = () => {
  const [orders] = useState([
    {
      id: 'ORD-2023-1',
      time: '12:21:06 PM',
      customer: 'Test Customer',
      phone: '1234567890',
      date: '23 Apr 2025',
      items: 1,
      amount: 1000,
      gst: 152.54,
      status: 'Paid'
    }
  ]);

  return (
    <div className="p-8 bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-1 text-gray-900 dark:text-white">Orders</h1>
          <p className="text-gray-600">View and manage all orders</p>
        </div>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Search orders..."
            className="border rounded px-4 py-2 w-64"
          />
          <select className="border rounded px-4 py-2 font-medium" style={{ minWidth: 150 }}>
            <option>All Orders</option>
            {/* Add more filter options as needed */}
          </select>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow p-6">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Order ID</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Customer</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Items</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Amount</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="font-bold">{order.id}</div>
                  <div className="text-xs text-gray-500">{order.time}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="font-medium">{order.customer}</div>
                  <div className="text-xs text-gray-500">{order.phone}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{order.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">{order.items} items</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="font-semibold">₹{order.amount.toLocaleString('en-IN', {minimumFractionDigits: 2})}</div>
                  <div className="text-xs text-gray-500">Inc. GST ₹{order.gst.toLocaleString('en-IN', {minimumFractionDigits: 2})}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="text-blue-600 hover:underline mr-4">View</button>
                  <button className="text-blue-600 hover:underline">Print</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex items-center justify-between border-t pt-4 mt-4">
          <div className="text-sm text-gray-500">
            Showing 1 to 1 of 1 results
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