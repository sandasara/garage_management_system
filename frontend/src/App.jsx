// App.js
import React from 'react';
import './index.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Appointment from './Pages/Appointment';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import ViewFeedbackPage from './Pages/ViewFeedbackPage';
import CustomerDashboard from './Pages/Customer/CustomerDashboard';
import MakeApp from './Pages/Customer/MakeApp';
import MyAppointment from './Pages/Customer/MyAppointment';
import GiveFeedbackPage from './Pages/Customer/GiveFeedbackPage';
import EmployeeDashboard from './Pages/Employee/EmployeeDashboard';
import AppointmentDetails from './Pages/Employee/AppointmentDetails';
import JobDetails from './Pages/Employee/JobDetails';
import ManagerDashboard from './Pages/Manager/ManagerDashboard';
import CustomerDetailsPage from './Pages/Manager/CustomerDetailsPage';
import EmployeeDetailsPage from './Pages/Manager/EmployeeDetailsPage';
import VehicleDetailsPage from './Pages/Manager/VehicleDetailsPage';
import MAppointmentDetails from './Pages/Manager/MAppointmentDetails';
import ProtectedRoute from './components/ProtectedRoute';
import { useUser } from './UserContext';

function App() {
  const { loading } = useUser();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
        {/* Protected routes */}
        <Route path="/dashboard/customer" element={
          <ProtectedRoute allowedRoles={['customer']}>
            <CustomerDashboard />
          </ProtectedRoute>
        } />
        <Route path="/dashboard/customer/makeappointment" element={
          <ProtectedRoute allowedRoles={['customer']}>
            <MakeApp />
          </ProtectedRoute>
        } />
        <Route path="/dashboard/customer/myappointment" element={
          <ProtectedRoute allowedRoles={['customer']}>
            <MyAppointment />
          </ProtectedRoute>
        } />
        <Route path="/dashboard/customer/givefeedback" element={
          <ProtectedRoute allowedRoles={['customer']}>
            <GiveFeedbackPage />
          </ProtectedRoute>
        } />
        
        <Route path="/dashboard/employee" element={
          <ProtectedRoute allowedRoles={['employee']}>
            <EmployeeDashboard />
          </ProtectedRoute>
        } />
        <Route path="/dashboard/employee/appointmentdetails" element={
          <ProtectedRoute allowedRoles={['employee']}>
            <AppointmentDetails />
          </ProtectedRoute>
        } />
        <Route path="/dashboard/employee/jobdetails" element={
          <ProtectedRoute allowedRoles={['employee']}>
            <JobDetails />
          </ProtectedRoute>
        } />
        
        <Route path="/dashboard/manager" element={
          <ProtectedRoute allowedRoles={['manager']}>
            <ManagerDashboard />
          </ProtectedRoute>
        } />
        <Route path="/dashboard/manager/customerdetails" element={
          <ProtectedRoute allowedRoles={['manager']}>
            <CustomerDetailsPage />
          </ProtectedRoute>
        } />
        <Route path="/dashboard/manager/appointmentdetails" element={
          <ProtectedRoute allowedRoles={['manager']}>
            <MAppointmentDetails />
          </ProtectedRoute>
        } />
        <Route path="/dashboard/manager/employeedetails" element={
          <ProtectedRoute allowedRoles={['manager']}>
            <EmployeeDetailsPage />
          </ProtectedRoute>
        } />
        <Route path="/dashboard/manager/vehicledetails" element={
          <ProtectedRoute allowedRoles={['manager']}>
            <VehicleDetailsPage />
          </ProtectedRoute>
        } />
        <Route path="/dashboard/manager/viewfeedback" element={
          <ProtectedRoute allowedRoles={['manager']}>
            <ViewFeedbackPage />
          </ProtectedRoute>
        } />
      </Routes>
    </>
  );
}

export default App;
