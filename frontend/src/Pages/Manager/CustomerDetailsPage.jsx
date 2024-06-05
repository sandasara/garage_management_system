import React from 'react'
import MSidebar from '../../components/ManagerDash/MSidebar'
import CustomerDetails from '../../components/ManagerDash/CustomerDetails'

function CustomerDetailsPage() {
  return (
    <div className="w-1/6 flex min-h-screen">
      <MSidebar />
      <main >
        <CustomerDetails />
      </main>
    </div>
  )
}

export default CustomerDetailsPage