import React from 'react'

function MSidebar() {
  return (
    <div className="min-h-screen flex">
      <aside className="bg-gray-800 text-white flex flex-col">
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
            <a href="/dashboard/manager/emplyeedetails" className="block py-4 px-6 hover:bg-gray-600">
              Employee Details
            </a>
            <a href="/dashboard/manager/jobDetails" className="block py-4 px-6 hover:bg-gray-600">
              Job Details
            </a>
            <a href="/dashboard/manager/veiwfeedback" className="block py-4 px-6 hover:bg-gray-600">
              View Feedback
            </a>
            <a href="/" className="block py-4 px-6 hover:bg-gray-600">
              Log Out
            </a>
        </nav>
      </aside>
    </div>
  )
}

export default MSidebar
