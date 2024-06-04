// ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUser } from '../UserContext';

const ProtectedRoute = ({ allowedRoles, children }) => {
  const { user } = useUser();

  console.log("User in ProtectedRoute:", user); // Add this line to debug

  if (!user || !allowedRoles.includes(user.role)) {
    return <Navigate to="/" />; // Redirect to login page if not authorized
  }

  return children;
};

export default ProtectedRoute;
