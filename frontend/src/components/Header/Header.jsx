import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../../UserContext'; // Import useUser from UserContext

const Header = () => {
  const { user } = useUser(); // Access user info from context

  let dashboardLink;
  if (user?.role === 'customer') {
    dashboardLink = '/dashboard/customer';
  } else if (user?.role === 'employee') {
    dashboardLink = '/dashboard/employee';
  } else if (user?.role === 'manager') {
    dashboardLink = '/dashboard/manager';
  }

  return (
    <div className="bg-gray-700 text-white p-4">
      <nav className="flex justify-between items-center">
        <div className="flex space-x-20">
          <a href="/" className="px-2 hover:bg-gray-600">Home</a>
          <a href="/Appointment" className="px-2 hover:bg-gray-600">Appointment</a>
          <a href="/Contact" className="px-2 hover:bg-gray-600">Contact</a>
        </div>
        <div className="flex items-center space-x-4">
          {user && (
            <>
              <span className="mr-4">Welcome, {user.username}!</span>
              {dashboardLink && (
                <Link to={dashboardLink} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Go to Dashboard
                </Link>
              )}
            </>
          )}
          {!user && (
            <>
              <a href="/Signup" className="px-2 hover:bg-gray-600">Sign Up</a>
              <a href="/Login" className="px-2 hover:bg-gray-600">Log In</a>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
