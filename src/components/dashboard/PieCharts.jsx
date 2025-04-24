import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const PieCharts = () => {
  // Revenue distribution data
  const revenueData = {
    labels: ['Products', 'Services', 'Subscriptions'],
    datasets: [
      {
        data: [45000, 25000, 17650],
        backgroundColor: [
          'rgba(54, 162, 235, 0.7)',
          'rgba(75, 192, 192, 0.7)',
          'rgba(153, 102, 255, 0.7)',
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  // Customer segments data
  const customerData = {
    labels: ['Retail', 'Corporate', 'Online'],
    datasets: [
      {
        data: [20, 15, 10],
        backgroundColor: [
          'rgba(255, 99, 132, 0.7)',
          'rgba(255, 159, 64, 0.7)',
          'rgba(255, 205, 86, 0.7)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 205, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  // Order status data
  const orderData = {
    labels: ['Completed', 'Pending', 'Cancelled'],
    datasets: [
      {
        data: [95, 25, 4],
        backgroundColor: [
          'rgba(75, 192, 192, 0.7)',
          'rgba(255, 205, 86, 0.7)',
          'rgba(255, 99, 132, 0.7)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 205, 86, 1)',
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Revenue Distribution</h2>
        <div className="h-64">
          <Pie data={revenueData} options={options} />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Customer Segments</h2>
        <div className="h-64">
          <Pie data={customerData} options={options} />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Order Status</h2>
        <div className="h-64">
          <Pie data={orderData} options={options} />
        </div>
      </div>
    </div>
  );
};

export default PieCharts;