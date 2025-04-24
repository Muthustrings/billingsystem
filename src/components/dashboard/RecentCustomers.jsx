import React from 'react';

const RecentCustomers = () => {
  const customers = [
    { name: 'Raj Kumar', phone: '+91 9876543210', orders: 3, spent: '₹15,000' },
    { name: 'Priya Singh', phone: '+91 9765432109', orders: 2, spent: '₹8,500' },
    { name: 'Amit Patel', phone: '+91 9654321098', orders: 1, spent: '₹5,000' }
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Recent Customers</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b">
              <th className="px-4 py-2 text-left">CUSTOMER</th>
              <th className="px-4 py-2 text-left">PHONE</th>
              <th className="px-4 py-2 text-left">ORDERS</th>
              <th className="px-4 py-2 text-left">TOTAL SPENT</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, index) => (
              <tr key={index} className="border-b">
                <td className="px-4 py-3">{customer.name}</td>
                <td className="px-4 py-3">{customer.phone}</td>
                <td className="px-4 py-3">{customer.orders}</td>
                <td className="px-4 py-3">{customer.spent}</td>
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
      </div>
    </div>
  );
};

export default RecentCustomers;