import React, { useContext } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { ThemeContext } from '../../context/ThemeContext';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieCharts = () => {
  const { darkMode } = useContext(ThemeContext);
  
  // Text color based on dark mode
  const textColor = darkMode ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)';
  
  // Orange-based color palette
  const colorPalette = [
    'rgba(249, 115, 22, 0.9)',  // primary-500
    'rgba(234, 88, 12, 0.9)',   // primary-600
    'rgba(194, 65, 12, 0.9)',   // primary-700
    'rgba(251, 146, 60, 0.9)',  // primary-400
    'rgba(253, 186, 116, 0.9)', // primary-300
  ];

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: textColor,
          font: {
            size: 12
          }
        }
      },
      tooltip: {
        backgroundColor: darkMode ? 'rgba(17, 24, 39, 0.8)' : 'rgba(255, 255, 255, 0.8)',
        titleColor: darkMode ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.9)',
        bodyColor: darkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)',
        borderColor: darkMode ? 'rgba(55, 65, 81, 0.3)' : 'rgba(229, 231, 235, 0.3)',
        borderWidth: 1
      }
    }
  };

  const revenueData = {
    labels: ['Products', 'Services', 'Subscriptions'],
    datasets: [
      {
        data: [45, 30, 25],
        backgroundColor: colorPalette,
        borderColor: darkMode ? 'rgba(17, 24, 39, 1)' : 'white',
        borderWidth: 2,
      },
    ],
  };

  const customerData = {
    labels: ['Retail', 'Corporate', 'Online'],
    datasets: [
      {
        data: [60, 25, 15],
        backgroundColor: colorPalette,
        borderColor: darkMode ? 'rgba(17, 24, 39, 1)' : 'white',
        borderWidth: 2,
      },
    ],
  };

  const orderStatusData = {
    labels: ['Completed', 'Pending', 'Cancelled'],
    datasets: [
      {
        data: [70, 20, 10],
        backgroundColor: colorPalette,
        borderColor: darkMode ? 'rgba(17, 24, 39, 1)' : 'white',
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 transition-colors duration-200">
        <h3 className="text-lg font-medium mb-4 text-center dark:text-white">Revenue Distribution</h3>
        <Pie data={revenueData} options={options} />
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 transition-colors duration-200">
        <h3 className="text-lg font-medium mb-4 text-center dark:text-white">Customer Segments</h3>
        <Pie data={customerData} options={options} />
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 transition-colors duration-200">
        <h3 className="text-lg font-medium mb-4 text-center dark:text-white">Order Status</h3>
        <Pie data={orderStatusData} options={options} />
      </div>
    </div>
  );
};

export default PieCharts;