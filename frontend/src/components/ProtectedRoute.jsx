import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUser } from '../UserContext';

const ProtectedRoute = ({ role, children }) => {
  const { user } = useUser();  // Access user info from context

  if (!user || user.role !== role) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
