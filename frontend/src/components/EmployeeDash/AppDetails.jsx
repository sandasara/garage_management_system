import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AppDetails() {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/appointments')
            .then(response => {
                setAppointments(response.data);
            })
            .catch(error => {
                console.error('Error fetching appointment data from backend!', error);
                alert('Error fetching appointment data from backend.');
            });
    }, []);

    return (
        <div className="container mx-auto px-4 py-6">
            <div className="text-3xl font-bold text-center text-gray-800 mb-6">Appointments Details</div>
            <div className="bg-white shadow-xl rounded-lg p-8">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">First Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vehicle Type</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vehicle No</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Appointment Type</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {appointments.map((appointment, index) => (
                            <tr key={index}>
                                <td className="px-6 py-4 whitespace-nowrap">{appointment.firstname}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{appointment.lastname}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{appointment.phone}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{appointment.vehicle_type}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{appointment.vehicle_no}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{appointment.date}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{appointment.time}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{appointment.description}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{appointment.appointment_type}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AppDetails;

