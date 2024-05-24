import React from 'react';

const Header = () => {
  return (
    <div className="bg-gray-700 text-white p-4">
      <nav className="flex justify-end space-x-20">
        <a href="/" className="px-2 hover:bg-gray-600">Home</a>
        <a href="/Appointment" className="px-2 hover:bg-gray-600">Appointment</a>
        <a href="/Contact" className="px-2 hover:bg-gray-600">Contact</a>
        <a href="/Signin" className="px-2 hover:bg-gray-600">Sign In</a>
        <a href="/Login" className="px-2 hover:bg-gray-600">Log In</a>
      </nav>
    </div>
  );
};

export default Header;
