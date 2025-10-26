import React from 'react';
import Navbar from './Navbar';
import PaymentForm from './PaymentForm';

const Dashboard = () => (
  <div>
    <Navbar />
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to MediPay</h1>
      <PaymentForm />
    </div>
  </div>
);

export default Dashboard;