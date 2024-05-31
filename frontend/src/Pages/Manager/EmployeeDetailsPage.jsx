import React from 'react'
import MSidebar from '../../components/ManagerDash/MSidebar'
import EmployeeDetails from '../../components/ManagerDash/EmployeeDetails'

function EmployeeDetailsPage() {
  return (
    <div className="w-1/6 flex min-h-screen">
      <MSidebar />
      <main >
        <EmployeeDetails />
      </main>
    </div>
  )
}

export default EmployeeDetailsPage
