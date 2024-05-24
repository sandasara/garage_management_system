import React from 'react';
import AppointForm from '../Appointment/AppointForm';

function CAppointment() {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-1/6 bg-gray-800 text-white flex flex-col">
        <div className="flex items-center py-24 px-12 justify-center h-24 bg-gray-900">
          <div className="w-32 h-32 rounded-full bg-gray-500"></div>
        </div>
        <nav className="flex-grow">
          <a href="/dashboard/customer" className="block py-8 px-6  bg-gray-700 hover:bg-gray-600">
            Profile
          </a>
          <a href="/dashboard/customer/makeappointment" className="block py-4 px-6 hover:bg-gray-600">
            Appointment
          </a>
          <a href="/MyAppointment" className="block py-4 px-6 hover:bg-gray-600">
            My Appointment
          </a>
          <a href="" className="block py-4 px-6 hover:bg-gray-600">
            Log Out
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-8 bg-gray-100">
        <AppointForm />
      </main>
    </div>
  );
}

export default CAppointment;
