import React, { useState } from 'react';

const CreateBill = () => {
  const [customer, setCustomer] = useState('');
  const [items, setItems] = useState([
    { id: 1, description: '', quantity: 1, price: 0 }
  ]);
  
  const addItem = () => {
    const newItem = {
      id: items.length + 1,
      description: '',
      quantity: 1,
      price: 0
    };
    setItems([...items, newItem]);
  };
  
  const updateItem = (id, field, value) => {
    const updatedItems = items.map(item => {
      if (item.id === id) {
        return { ...item, [field]: value };
      }
      return item;
    });
    setItems(updatedItems);
  };
  
  const removeItem = (id) => {
    const updatedItems = items.filter(item => item.id !== id);
    setItems(updatedItems);
  };
  
  const calculateSubtotal = () => {
    return items.reduce((total, item) => {
      return total + (item.quantity * item.price);
    }, 0);
  };
  
  const calculateTax = () => {
    return calculateSubtotal() * 0.18; // 18% GST
  };
  
  const calculateTotal = () => {
    return calculateSubtotal() + calculateTax();
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Create Bill</h1>
      
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Customer Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 mb-2">Customer Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              value={customer}
              onChange={(e) => setCustomer(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Date</label>
            <input
              type="date"
              className="w-full p-2 border rounded"
              defaultValue={new Date().toISOString().split('T')[0]}
            />
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Items</h2>
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
              <tr className="border-b">
                <th className="px-4 py-2 text-left">Description</th>
                <th className="px-4 py-2 text-left">Quantity</th>
                <th className="px-4 py-2 text-left">Price</th>
                <th className="px-4 py-2 text-left">Total</th>
                <th className="px-4 py-2 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id} className="border-b">
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
        <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
          Save Invoice
        </button>
      </div>
    </div>
  );
};

export default CreateBill;