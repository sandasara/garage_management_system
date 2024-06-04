import React from 'react';
import MSidebar from '../../components/ManagerDash/MSidebar'
import AppDetails from '../../components/EmployeeDash/AppDetails'

const AppointmentDetailsPage = () => {
  return (
    <div className="w-1/6 flex min-h-screen">
      <MSidebar />
      <main >
        <AppDetails />
      </main>
    </div>
  );
};

export default AppointmentDetailsPage;
