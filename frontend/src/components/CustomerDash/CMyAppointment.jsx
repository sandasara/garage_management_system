import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CMyAppointment() {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/myappointments')
            .then(response => {
                setAppointments(response.data);
            })
            .catch(error => {
                console.error('Error fetching appointment data from backend!', error);
                alert('Error fetching appointment data from backend.');
            });
    }, []);

    return (
        <div className="min-h-screen flex">
            <aside className="w-1/6 bg-gray-800 text-white flex flex-col">
                <div className="flex items-center py-6 px-4 justify-center h-24 bg-gray-900">
                    <div className="w-32 h-32 rounded-full bg-gray-500"></div>
                </div>
                <nav className="flex-grow">
                    <a href="/dashboard/customer" className="block py-8 px-6 bg-gray-700 hover:bg-gray-600">
                        Profile
                    </a>
                    <a href="/dashboard/customer/makeappointment" className="block py-4 px-6 hover:bg-gray-600">
                        Appointment
                    </a>
                    <a href="/dashboard/customer/myappointment" className="block py-4 px-6 hover:bg-gray-600">
                        My Appointment
                    </a>
                    <a href="/dashboard/customer/givefeedback" className="block py-4 px-6 hover:bg-gray-600">
                        Give Feedback
                    </a>
                    <a href="/" className="block py-4 px-6 hover:bg-gray-600">
                        Log Out
                    </a>
                </nav>
            </aside>
            
            <main className="flex-grow p-8">
                <div className="text-3xl font-bold text-center text-gray-800 mb-6">My Appointments</div>
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
            </main>
        </div>
    );
}

export default CMyAppointment;
