import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Customers from './pages/Customers';
import Orders from './pages/Orders';
import CreateBill from './pages/CreateBill';
import InvoiceDetail from './components/invoices/InvoiceDetail';
import Sidebar from './components/layout/Sidebar';

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 overflow-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/create-bill" element={<CreateBill />} />
            <Route path="/invoices/:id" element={<InvoiceDetail />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;