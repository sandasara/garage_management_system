import React from 'react';

function ESidebar() {
  return (
    <div className="min-h-screen flex flex-col">
      <aside className="w-1/6 bg-gray-800 text-white flex flex-col fixed left-0 top-0 h-full">
        <div className="flex items-center py-24 px-12 justify-center h-24 bg-gray-900">
          <div className="w-32 h-32 rounded-full bg-gray-500"></div>
        </div>
        <nav className="flex-grow">
          <a href="/dashboard/employee" className="block py-8 px-6 bg-gray-700 hover:bg-gray-600">
            Profile
          </a>
          <a href="/AppointmentDetails" className="block py-4 px-6 hover:bg-gray-600">
            Appointment Details
          </a>
          <a href="/job" className="block py-4 px-6 hover:bg-gray-600">
            Job Details
          </a>
          <a href="/" className="block py-4 px-6 hover:bg-gray-600">
            Log Out
          </a>
        </nav>
      </aside>
    </div>
  );
}

export default ESidebar;
