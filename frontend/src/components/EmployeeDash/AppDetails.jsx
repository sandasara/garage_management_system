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

    // const handleStatusChange = (id, newStatus) => {
    //     axios.put('http://localhost:5000/updateAppointmentStatus', { id, status: newStatus })
    //         .then(response => {
    //             setAppointments(prevAppointments => prevAppointments.map(appointment => 
    //                 appointment.id === id ? { ...appointment, status: newStatus } : appointment
    //             ));
    //         })
    //         .catch(error => {
    //             console.error('Error updating appointment status!', error);
    //             alert('Error updating appointment status.');
    //         });
    // };

    // const getStatusClass = (status) => {
    //     switch (status) {
    //         case 'notstarted':
    //             return 'text-blue-500';
    //         case 'inprogress':
    //             return 'text-yellow-500';
    //         case 'completed':
    //             return 'text-green-500';
    //         case 'cancelled':
    //             return 'text-red-500';
    //         default:
    //             return '';
    //     }
    // };

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
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
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
                                <td className="px-6 py-4 whitespace-nowrap">{appointment.status}
                                    {/* <select
                                        value={appointment.status}
                                        onChange={(e) => handleStatusChange(appointment.id, e.target.value)}
                                        className={`status-dropdown ${getStatusClass(appointment.status)}`}
                                    >
                                        <option value="notstarted" className="text-blue-500">Not Started</option>
                                        <option value="inprogress" className="text-yellow-500">In Progress</option>
                                        <option value="completed" className="text-green-500">Completed</option>
                                        <option value="cancelled" className="text-red-500">Cancelled</option>
                                    </select> */}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AppDetails;
