// src/components/OtpVerification.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { setToken } from '../auth';

const OtpVerification = () => {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { email } = location.state;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/auth/verify-otp', { email, otp })
      .then(response => {
        setToken(response.data.token);
        navigate('/');
      })
      .catch(error => {
        setError('Invalid OTP');
      });
  };

  return (
    <div className="auth-form">
      <h1>OTP Verification</h1>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          OTP:
          <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} />
        </label>
        <button type="submit">Verify</button>
      </form>
    </div>
  );
};

export default OtpVerification;
