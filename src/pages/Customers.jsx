import React, { useState } from 'react';

const Customers = () => {
  const [customers] = useState([
    {
      name: 'Test Customer',
      contact: '1234567890',
      email: 'test@example.com',
      address: '123 Test Street',
      orders: 1,
      totalSpent: 1000
    }
  ]);

  return (
    <div className="p-8 bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-1 text-gray-900 dark:text-white">Customers</h1>
          <p className="text-gray-600">Manage your customer information</p>
        </div>
        <input
          type="text"
          placeholder="Search customers..."
          className="border rounded px-4 py-2 w-72"
        />
      </div>
      <div className="bg-white rounded-xl shadow p-6">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Contact</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Address</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Orders</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Total Spent</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, idx) => (
              <tr key={idx} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap font-medium">{customer.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div>{customer.contact}</div>
                  <div className="text-xs text-gray-500">{customer.email}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{customer.address}</td>
                <td className="px-6 py-4 whitespace-nowrap">{customer.orders}</td>
                <td className="px-6 py-4 whitespace-nowrap font-semibold">₹{customer.totalSpent.toLocaleString('en-IN', {minimumFractionDigits: 2})}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="text-blue-600 hover:underline mr-4">View</button>
                  <button className="text-blue-600 hover:underline">Edit</button>
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

export default Customers;