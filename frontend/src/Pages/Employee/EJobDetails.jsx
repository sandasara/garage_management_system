import React from 'react'
import ESidebar from '../../components/EmployeeDash/ESidebar'
import JobDetails from '../../components/EmployeeDash/JobDetails'

function JobDetailsPage() {
  return (
    <div className="w-1/6 flex min-h-screen">
      <ESidebar />
      <main >
        <JobDetails />
      </main>
    </div>
  )
}

export default JobDetailsPage