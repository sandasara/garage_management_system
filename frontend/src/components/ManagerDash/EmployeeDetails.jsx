import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AppDetails() {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/employeedetails')
            .then(response => {
                setAppointments(response.data);
            })
            .catch(error => {
                console.error('Error fetching employee data from backend!', error);
                alert('Error fetching employee data from backend.');
            });
    }, []);

    return (
        <div className="container mx-auto px-4 py-6">
            <div className="text-3xl font-bold text-center text-gray-800 mb-6">Employee Details</div>
            <div className="bg-white shadow-xl rounded-lg p-8">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Employee ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Employee Type</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">First Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Address</th>
                            
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {appointments.map((employeedetails, index) => (
                            <tr key={index}>
                                <td className="px-6 py-4 whitespace-nowrap">{employeedetails.employee_id}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{employeedetails.employee_type}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{employeedetails.firstname}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{employeedetails.lastname}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{employeedetails.email}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{employeedetails.phone}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{employeedetails.address}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AppDetails;

