import React, { useEffect, useState } from 'react';
import './index.css';
import { Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
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


function App() {

  const [listOfCustomers, setListOfCustomers] = useState([])
  useEffect(() => {
    axios.get("http://localhost:8081/customers")
      .then(response => {
        setListOfCustomers(response.data);
      })
      .catch(error => {
        console.error('Error fetching customer data:', error);
      });
  }, []);

  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard/customer" element={<CustomerDashboard />} />
        <Route path="/dashboard/customer/makeappointment" element={<MakeApp />} />
        <Route path="/dashboard/customer/myappointment" element={<MyAppointment />} />
        <Route path="/dashboard/customer/givefeedback" element={<GiveFeedbackPage />} />
        <Route path="/dashboard/employee" element={<EmployeeDashboard />} />
        <Route path="/dashboard/employee/AppointmentDetails" element={<AppointmentDetails />} />
        <Route path="/dashboard/employee/jobdetails" element={<JobDetails />} />
        <Route path="/dashboard/manager" element={<ManagerDashboard />} />
        <Route path="/dashboard/manager/customerdetails" element={<CustomerDetailsPage />} />
        <Route path="/dashboard/manager/appointmentdetails" element={<MAppointmentDetails />} />
        <Route path="/dashboard/manager/emplyeedetails" element={<EmployeeDetailsPage />} />
        <Route path="/dashboard/manager/vehicledetails" element={<VehicleDetailsPage />} />
        <Route path="/dashboard/manager/veiwfeedback" element={<ViewFeedbackPage />} />
      </Routes>
    </>
  );
}

export default App;
