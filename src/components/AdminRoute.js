import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../auth';

const AdminRoute = ({ children }) => {
  const role = localStorage.getItem('role');

  return isAuthenticated() && role === 'superAdmin' ? children : <Navigate to="/" />;
};

export default AdminRoute;
