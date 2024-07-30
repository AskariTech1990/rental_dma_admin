// // src/components/PrivateRoute.js
// import React from 'react';
// import { Navigate } from 'react-router-dom';
// import { isAuthenticated } from '../auth';

// const PrivateRoute = ({ children }) => {
//   return isAuthenticated() ? children : <Navigate to="/login" />;
// };

// export default PrivateRoute;


import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../auth';

const PrivateRoute = ({ children }) => {
  if (typeof children === 'undefined') {
    console.error("PrivateRoute received undefined children");
    return null;
  }
  
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
