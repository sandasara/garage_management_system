import React from 'react'

function CSidebar() {
  return (
    <div className="min-h-screen flex">

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
          <a href="/dashboard/customer/myappointment" className="block py-4 px-6 hover:bg-gray-600">
            My Appointment
          </a>
          <a href="" className="block py-4 px-6 hover:bg-gray-600">
            Log Out
          </a>
        </nav>
      </aside>
      
    </div>
  )
}

export default CSidebar
