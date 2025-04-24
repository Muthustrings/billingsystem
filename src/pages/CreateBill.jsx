import React, { useState } from 'react';

const CreateBill = () => {
  const [customer, setCustomer] = useState('');
  const [items, setItems] = useState([
    { id: 1, description: '', quantity: 1, price: 0 }
  ]);

  const addItem = () => {
    setItems([...items, { id: items.length + 1, description: '', quantity: 1, price: 0 }]);
  };

  const updateItem = (id, field, value) => {
    setItems(items.map(item => item.id === id ? { ...item, [field]: value } : item));
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const calculateSubtotal = () => items.reduce((total, item) => total + (item.quantity * item.price), 0);
  const calculateTax = () => calculateSubtotal() * 0.18;
  const calculateTotal = () => calculateSubtotal() + calculateTax();

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-1 text-gray-900 dark:text-white">Create Bill</h1>
          <p className="text-gray-600">Generate a new invoice for your customer</p>
        </div>
        <div></div>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4 dark:text-white">Customer Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 dark:text-gray-200 mb-2">Customer Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              value={customer}
              onChange={(e) => setCustomer(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-200 mb-2">Date</label>
            <input
              type="date"
              className="w-full p-2 border rounded"
              defaultValue={new Date().toISOString().split('T')[0]}
            />
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold dark:text-white">Items</h2>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={addItem}
          >
            Add Item
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-2 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Description</th>
                <th className="px-4 py-2 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Quantity</th>
                <th className="px-4 py-2 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Price</th>
                <th className="px-4 py-2 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Total</th>
                <th className="px-4 py-2 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id} className="border-b hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-4 py-2">
                    <input
                      type="text"
                      className="w-full p-2 border rounded"
                      value={item.description}
                      onChange={(e) => updateItem(item.id, 'description', e.target.value)}
                    />
                  </td>
                  <td className="px-4 py-2">
                    <input
                      type="number"
                      className="w-full p-2 border rounded"
                      value={item.quantity}
                      onChange={(e) => updateItem(item.id, 'quantity', parseInt(e.target.value))}
                      min="1"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <input
                      type="number"
                      className="w-full p-2 border rounded"
                      value={item.price}
                      onChange={(e) => updateItem(item.id, 'price', parseFloat(e.target.value))}
                      min="0"
                      step="0.01"
                    />
                  </td>
                  <td className="px-4 py-2">
                    ₹{(item.quantity * item.price).toFixed(2)}
                  </td>
                  <td className="px-4 py-2">
                    <button
                      className="text-red-600 hover:text-red-900"
                      onClick={() => removeItem(item.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 border-t pt-4">
          <div className="flex justify-end">
            <div className="w-64">
              <div className="flex justify-between py-2">
                <span className="font-medium">Subtotal:</span>
                <span>₹{calculateSubtotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="font-medium">GST (18%):</span>
                <span>₹{calculateTax().toFixed(2)}</span>
              </div>
              <div className="flex justify-between py-2 border-t border-gray-300 mt-2 pt-2">
                <span className="font-bold">Total:</span>
                <span className="font-bold">₹{calculateTotal().toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-6">
        <button className="bg-gray-300 text-gray-800 px-6 py-2 rounded hover:bg-gray-400 mr-4">
          Cancel
        </button>
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Save Invoice
        </button>
      </div>
    </div>
  );
};

export default CreateBill;