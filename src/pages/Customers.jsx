import React, { useState } from 'react';

const Customers = () => {
  const [customers] = useState([
    { 
      id: 1, 
      name: 'Test Customer', 
      phone: '1234567890', 
      email: 'test@example.com', 
      address: '123 Test Street', 
      orders: 1, 
      spent: '₹1,000.00' 
    }
  ]);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold mb-2">Customers</h1>
          <p className="text-gray-600">Manage your customer information</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Add Customer
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search customers..."
              className="w-full p-2 pl-10 border rounded"
            />
            <svg className="w-5 h-5 text-gray-400 absolute left-3 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
        
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-50 border-b">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Address</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Orders</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Spent</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {customers.map((customer) => (
              <tr key={customer.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">{customer.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div>{customer.phone}</div>
                  <div className="text-gray-500 text-sm">{customer.email}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{customer.address}</td>
                <td className="px-6 py-4 whitespace-nowrap">{customer.orders}</td>
                <td className="px-6 py-4 whitespace-nowrap">{customer.spent}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="text-blue-600 hover:text-blue-900 mr-3">View</button>
                  <button className="text-blue-600 hover:text-blue-900">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        <div className="px-6 py-4 flex items-center justify-between border-t">
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