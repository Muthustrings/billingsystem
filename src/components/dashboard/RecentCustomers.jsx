import React from 'react';

const RecentCustomers = () => {
  const customers = [
    { name: 'Raj Kumar', phone: '+91 9876543210', orders: 3, spent: '₹15,000' },
    { name: 'Priya Singh', phone: '+91 9765432109', orders: 2, spent: '₹8,500' },
    { name: 'Amit Patel', phone: '+91 9654321098', orders: 1, spent: '₹5,000' }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Recent Customers</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b dark:border-gray-700">
              <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-200">CUSTOMER</th>
              <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-200">PHONE</th>
              <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-200">ORDERS</th>
              <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-200">TOTAL SPENT</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, index) => (
              <tr key={index} className="border-b dark:border-gray-700">
                <td className="px-4 py-3 text-gray-900 dark:text-gray-100">{customer.name}</td>
                <td className="px-4 py-3 text-gray-700 dark:text-gray-200">{customer.phone}</td>
                <td className="px-4 py-3 text-gray-700 dark:text-gray-200">{customer.orders}</td>
                <td className="px-4 py-3 text-gray-700 dark:text-gray-200">{customer.spent}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <div className="flex">
          <button className="p-2 border dark:border-gray-700 rounded-l dark:bg-gray-700">
            <svg className="w-5 h-5 text-gray-700 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          <button className="p-2 border dark:border-gray-700 rounded-r dark:bg-gray-700">
            <svg className="w-5 h-5 text-gray-700 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecentCustomers;