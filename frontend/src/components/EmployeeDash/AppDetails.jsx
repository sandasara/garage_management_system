import React from 'react';

const AppDetails = () => {
  return (
    <div className="flex-grow ml-1/6 p-8 bg-gray-100 ">
      <h2 className="text-2xl font-bold mb-6">Appointment Details</h2>
      <div className="overflow-auto bg-white p-6 rounded-lg shadow-lg">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">Appointment No</th>
                <th className="border border-gray-300 px-4 py-2">First Name</th>
                <th className="border border-gray-300 px-4 py-2">Last Name</th>
                <th className="border border-gray-300 px-4 py-2">Phone</th>
                <th className="border border-gray-300 px-4 py-2">Vehicle Type</th>
                <th className="border border-gray-300 px-4 py-2">Vehicle Number</th>
                <th className="border border-gray-300 px-4 py-2">Selected Service</th>
                <th className="border border-gray-300 px-4 py-2">Date</th>
                <th className="border border-gray-300 px-4 py-2">Time</th>
                <th className="border border-gray-300 px-4 py-2">Description</th>
                <th className="border border-gray-300 px-4 py-2">Appointment Type</th>
                <th className="border border-gray-300 px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {/* Add appointment rows here */}
              <tr>
                <td className="border border-gray-300 px-4 py-2">R32</td>
                <td className="border border-gray-300 px-4 py-2">John</td>
                <td className="border border-gray-300 px-4 py-2">Doe</td>
                <td className="border border-gray-300 px-4 py-2">123-456-7890</td>
                <td className="border border-gray-300 px-4 py-2">BMW 3 series</td>
                <td className="border border-gray-300 px-4 py-2">AB123CD</td>
                <td className="border border-gray-300 px-4 py-2">Oil Change</td>
                <td className="border border-gray-300 px-4 py-2">10/01/23</td>
                <td className="border border-gray-300 px-4 py-2">10:00 AM</td>
                <td className="border border-gray-300 px-4 py-2">-</td>
                <td className="border border-gray-300 px-4 py-2">Standard</td>
                <td className="border border-gray-300 px-4 py-2">In Progress</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
