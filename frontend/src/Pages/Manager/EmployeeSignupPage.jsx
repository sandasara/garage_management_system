import React from 'react';
import MSidebar from '../../components/ManagerDash/MSidebar';
import EmployeeSignUp from '../../components/Signup/EmployeeSignUp';

function EmployeeSignupPage() {
  return (
    <div className="flex min-h-screen">
      <MSidebar className="w-1/6" />
      <main className="flex-1">
        <EmployeeSignUp />
      </main>
    </div>
  );
}

export default EmployeeSignupPage;
