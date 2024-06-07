import React from 'react';
import './index.css';
import { Routes, Route, Navigate } from 'react-router-dom'; // Replace 'Link' with 'Navigate'
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
import EJobDetails from './Pages/Employee/EJobDetails';
import ManagerDashboard from './Pages/Manager/ManagerDashboard';
import CustomerDetailsPage from './Pages/Manager/CustomerDetailsPage';
import EmployeeDetailsPage from './Pages/Manager/EmployeeDetailsPage';
import VehicleDetailsPage from './Pages/Manager/VehicleDetailsPage';
import MAppointmentDetails from './Pages/Manager/MAppointmentDetails';
import MJobDetailsPage from './Pages/Manager/MJobDetailsPage';
import FileUpload from './FileUpload';
import EmployeeSignupPage from './Pages/Manager/EmployeeSignupPage';
import ProtectedRoute from './components/ProtectedRoute'; 

function App() {
  const [user, setUser] = useState(null); // State variable to store user authentication
  const [customerData, setCustomerData] = useState(null); // State variable to store customer data

  useEffect(() => {
    const fetchCustomerData = async () => {
      try {
        const response = await axios.get('/mycustomerdetails');
        setCustomerData(response.data);
      } catch (error) {
        console.error('Error fetching customer data:', error);
      }
    };

    fetchCustomerData();
  }, []);

  useEffect(() => {
    // Check if the user is logged in by looking for a token in localStorage
    const token = localStorage.getItem('token');
    if (token) {
      // If token exists, set the user as logged in
      setUser({ isLoggedIn: true });
    } else {
      // If token doesn't exist, set the user as not logged in
      setUser(null);
    }
  }, []);

  return (
    <>   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route element={<ProtectedRoute allowedRoles={['customer']} user={user} />}>
          <Route path="/dashboard/customer" element={<CustomerDashboard customerData={customerData} />} />
          <Route path="/dashboard/customer/makeappointment" element={<MakeApp />} />
          <Route path="/dashboard/customer/myappointment" element={<MyAppointment />} />
          <Route path="/dashboard/customer/givefeedback" element={<GiveFeedbackPage />} />
        </Route>

        <Route element={<ProtectedRoute allowedRoles={['employee']} user={user} />}>
          <Route path="/dashboard/employee" element={<EmployeeDashboard />} />
          <Route path="/dashboard/employee/AppointmentDetails" element={<AppointmentDetails />} />
          <Route path="/dashboard/employee/jobdetails" element={<EJobDetails />} />
          <Route path="/dashboard/employee/fileupload" element={<FileUpload />} />
          <Route path="/dashboard/manager/veiwfeedback" element={<ViewFeedbackPage />} />
        </Route> 

        <Route element={<ProtectedRoute allowedRoles={['manager']} user={user} />}>
          <Route path="/dashboard/manager" element={<ManagerDashboard />} />
          <Route path="/dashboard/manager/customerdetails" element={<CustomerDetailsPage />} />
          <Route path="/dashboard/manager/appointmentdetails" element={<MAppointmentDetails />} />
          <Route path="/dashboard/manager/emplyeedetails" element={<EmployeeDetailsPage />} />
          <Route path="/dashboard/manager/jobdetails" element={<MJobDetailsPage />} />
          <Route path="/dashboard/manager/vehicledetails" element={<VehicleDetailsPage />} />
          <Route path="/dashboard/manager/veiwfeedback" element={<ViewFeedbackPage />} />
          <Route path="/dashboard/manager/employeesignup" element={<EmployeeSignupPage />} />
          <Route path="/dashboard/manager/fileupload" element={<FileUpload />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;