import React from 'react'
import MSidebar from '../../components/ManagerDash/MSidebar'
import JobDetails from '../../components/EmployeeDash/JobDetails'

function MJobDetailsPage() {
  return (
    <div className="w-1/6 flex min-h-screen">
      <MSidebar />
      <main >
        <JobDetails />
      </main>
    </div>
  )
}

export default MJobDetailsPage