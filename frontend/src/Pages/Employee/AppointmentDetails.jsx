import React from 'react';
import ESidebar from '../../components/EmployeeDash/ESidebar'
import AppDetails from '../../components/EmployeeDash/AppDetails'

const AppointmentDetailsPage = () => {
  return (
    <div className="flex min-h-screen">
      <main className="flex-grow ml-1/6 p-8 bg-gray-100">
        <AppDetails />
      </main >
      <ESidebar />
    </div>
  );
};

export default AppointmentDetailsPage;

