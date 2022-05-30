import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AdminManager from './pages/AdminManager';
import Login from './pages/Login';
import Products from './pages/Products';
import Register from './pages/Register';
import SalesOrder from './pages/sales/SalesOrder';
import SalesDetails from './pages/sales/SalesDetails';
import Checkout from './pages/Checkout';
import CustomerOrder from './pages/customer/CustomerOrder';
import CustomerOrderDetails from './pages/customer/CustomerOrderDetails';

// teste
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <Navigate to="/login" /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/products/" element={ <Navigate to="/customer/products" /> } />
        <Route exact path="/customer/products" element={ <Products /> } />
        <Route exact path="/customer/checkout" element={ <Checkout /> } />
        <Route exact path="/admin/manage" element={ <AdminManager /> } />
        <Route path="/customer/orders" element={ <CustomerOrder /> } />
        <Route path="/customer/orders/:id" element={ <CustomerOrderDetails /> } />
        <Route path="/seller/orders" element={ <SalesOrder /> } />
        <Route path="/seller/orders/:id" element={ <SalesDetails /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
