// src/components/Payments.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Payments = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    axios.get('/api/payments')
      .then(response => setPayments(response.data))
      .catch(error => console.error(error));
  }, []);

  const trackPayment = (paymentId) => {
    axios.get(`/api/payments/${paymentId}`)
      .then(response => console.log(response.data))
      .catch(error => console.error(error));
  };

  return (
    <div className="payments">
      <h1 className='text-3xl font-bold'>All Payments</h1>
      <ul>
        {payments.map(payment => (
          <li key={payment._id}>
            {payment.userId} - {payment.amount}
            <button onClick={() => trackPayment(payment._id)}>Track</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Payments;
