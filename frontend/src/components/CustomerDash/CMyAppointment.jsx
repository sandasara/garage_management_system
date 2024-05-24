import React from 'react'

function CMyAppointment() {
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

    {/* Main Content */}
    <main className="flex-grow p-8 bg-gray-100">
    <div className="container mx-auto px-4 py-6 bg-white shadow-xl rounded-lg">
      <div className="text-3xl font-bold text-center text-gray-800 mb-6">My Appointments</div>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600">Appointment No.</th>
            <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600">Date</th>
            <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600">Time</th>
            <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600">Vehicle No.</th>
            <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600">Description</th>
            <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4 border-b border-gray-200">R324</td>
            <td className="py-2 px-4 border-b border-gray-200">10/05/23</td>
            <td className="py-2 px-4 border-b border-gray-200">10:00 AM</td>
            <td className="py-2 px-4 border-b border-gray-200">BMW 3 series</td>
            <td className="py-2 px-4 border-b border-gray-200">-</td>
            <td className="py-2 px-4 border-b border-gray-200">In progress</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
    </main>
  </div>
  )
}

export default CMyAppointment
