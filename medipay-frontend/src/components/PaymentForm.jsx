import React, { useState } from 'react';
import axios from 'axios';

const PaymentForm = () => {
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');

  const handlePayment = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/payments', {
        amount,
        recipient,
      });
      alert('Payment initiated: ' + response.data.message);
    } catch (error) {
      alert('Payment failed: ' + error.message);
    }
  };

  return (
    <form onSubmit={handlePayment} className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded">
      <h2 className="text-xl font-semibold mb-4">Make a Payment</h2>
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
        required
      />
      <input
        type="text"
        placeholder="Recipient (e.g., Clinic Name)"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
        required
      />
      <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">
        Pay Now
      </button>
    </form>
  );
};

export default PaymentForm;