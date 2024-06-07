import React from 'react';
import Logout from '../logout/Logout';

const ProfilePage = () => {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-1/6 bg-gray-800 text-white flex flex-col">
        <div className="flex items-center py-24 px-12 justify-center h-24 bg-gray-900">
          <div className="w-32 h-32 rounded-full bg-gray-500"></div>
        </div>
        <nav className="flex-grow">
          <a href="/dashboard/manager" className="block py-8 px-6 justify-center bg-gray-700 hover:bg-gray-600">
            Profile
          </a>
          <a href="/dashboard/manager/AppointmentDetails" className="block py-4 px-6 hover:bg-gray-600">
            Appointment Details
          </a>
          <a href="/dashboard/manager/CustomerDetails" className="block py-4 px-6 hover:bg-gray-600">
            Customer Details
          </a>
          <a href="/dashboard/manager/employeedetails" className="block py-4 px-6 hover:bg-gray-600">
            Employee Details
          </a>
          <a href="/dashboard/manager/employeesignup" className="block py-4 px-6 hover:bg-gray-600">
            Register Employees
          </a>
          <a href="/dashboard/manager/jobDetails" className="block py-4 px-6 hover:bg-gray-600">
            Job Details
          </a>
          <a href="/dashboard/manager/veiwfeedback" className="block py-4 px-6 hover:bg-gray-600">
            View Feedback
          </a>
          < Logout/>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-8 bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Edit Profile</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">First Name</label>
                <input
                  type="text"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                  
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Last Name</label>
                <input
                  type="text"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                 
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                defaultValue="amalkumara@gmail.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Contact Number</label>
              <input
                type="text"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
               
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Address</label>
              <input
                type="text"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
               
              />
            </div>
            
           
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
              
              />
            </div>
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md shadow-md hover:bg-blue-600"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;