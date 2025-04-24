import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const InvoiceDetail = () => {
  const { id } = useParams();
  const [invoice, setInvoice] = useState(null);
  const [loading, setLoading] = useState(true);

  // Simulate fetching invoice data
  useEffect(() => {
    // In a real app, this would be an API call
    setTimeout(() => {
      setInvoice({
        id: id,
        customer: {
          name: 'Raj Kumar',
          email: 'raj@example.com',
          phone: '9876543210',
          address: '123 Main Street, Mumbai, India'
        },
        invoiceNumber: id,
        date: '15 Oct 2023',
        dueDate: '30 Oct 2023',
        status: 'Paid',
        items: [
          { id: 1, description: 'Product A', quantity: 2, price: 1250, total: 2500 },
          { id: 2, description: 'Service B', quantity: 1, price: 2750, total: 2750 }
        ],
        subtotal: 5250,
        tax: 525,
        total: 5775
      });
      setLoading(false);
    }, 1000);
  }, [id]);

  if (loading) {
    return (
      <div className="p-6 flex justify-center items-center h-full">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!invoice) {
    return (
      <div className="p-6">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          Invoice not found
        </div>
        <Link to="/orders" className="mt-4 inline-block text-blue-500 hover:underline">
          Back to Orders
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Invoice {invoice.invoiceNumber}</h1>
        <div className="flex space-x-2">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Download PDF
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Send Invoice
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex justify-between mb-6">
          <div>
            <h2 className="text-lg font-semibold mb-2">Bill To:</h2>
            <p className="text-gray-700">{invoice.customer.name}</p>
            <p className="text-gray-700">{invoice.customer.email}</p>
            <p className="text-gray-700">{invoice.customer.phone}</p>
            <p className="text-gray-700">{invoice.customer.address}</p>
          </div>
          <div className="text-right">
            <h2 className="text-lg font-semibold mb-2">Invoice Details:</h2>
            <p className="text-gray-700">Invoice Number: {invoice.invoiceNumber}</p>
            <p className="text-gray-700">Date: {invoice.date}</p>
            <p className="text-gray-700">Due Date: {invoice.dueDate}</p>
            <p className={`font-semibold ${invoice.status === 'Paid' ? 'text-green-600' : 'text-yellow-600'}`}>
              Status: {invoice.status}
            </p>
          </div>
        </div>

        <table className="w-full border-collapse mb-6">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2 text-left">Item</th>
              <th className="border p-2 text-right">Quantity</th>
              <th className="border p-2 text-right">Price</th>
              <th className="border p-2 text-right">Total</th>
            </tr>
          </thead>
          <tbody>
            {invoice.items.map((item) => (
              <tr key={item.id}>
                <td className="border p-2">{item.description}</td>
                <td className="border p-2 text-right">{item.quantity}</td>
                <td className="border p-2 text-right">₹{item.price.toFixed(2)}</td>
                <td className="border p-2 text-right">₹{item.total.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="3" className="border p-2 text-right font-semibold">Subtotal:</td>
              <td className="border p-2 text-right">₹{invoice.subtotal.toFixed(2)}</td>
            </tr>
            <tr>
              <td colSpan="3" className="border p-2 text-right font-semibold">Tax (10%):</td>
              <td className="border p-2 text-right">₹{invoice.tax.toFixed(2)}</td>
            </tr>
            <tr className="bg-gray-100">
              <td colSpan="3" className="border p-2 text-right font-bold">Total:</td>
              <td className="border p-2 text-right font-bold">₹{invoice.total.toFixed(2)}</td>
            </tr>
          </tfoot>
        </table>

        <div className="border-t pt-4">
          <h3 className="font-semibold mb-2">Notes:</h3>
          <p className="text-gray-700">Thank you for your business! Payment is due within 15 days.</p>
        </div>
      </div>

      <Link to="/orders" className="text-blue-500 hover:underline">
        ← Back to Orders
      </Link>
    </div>
  );
};

export default InvoiceDetail;