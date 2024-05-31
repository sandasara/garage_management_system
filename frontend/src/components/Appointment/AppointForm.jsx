import React, { useState } from 'react';
import axios from 'axios';

function AppointmentForm() {
    const [appointmentType, setAppointmentType] = useState('onStation');
    const [emergencyLocation, setEmergencyLocation] = useState('');
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        phone: '',
        vehicle_type: '',
        vehicle_no: '',
        // select_service: {
        //     Wash_and_Grooming: false,
        //     Lube_Service: false,
        //     Exterior_and_Interior_Detailing: false,
        //     Engine_Tune_Ups: false,
        //     Undercarriage_Degreasing: false,
        //     Windscreen_Treatments: false,
        //     Inspection_Reports: false,
        //     Wheel_Alignment: false,
        //     Battery_Services: false,
        // },
        date: '',
        time: '',
        description: '',
        appointment_type: 'onStation',
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            // Handles checkbox changes specifically for nested select_service object
            setFormData(prevState => ({
                ...prevState,
                select_service: {
                    ...prevState.select_service,
                    [name]: checked
                }
            }));
        } else {
            // Handles changes for other types of inputs
            setFormData(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    const handleAppointmentTypeChange = (e) => {
        setAppointmentType(e.target.value);
    };

    const handleEmergencyLocationChange = (e) => {
        setEmergencyLocation(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/appointmentform', formData)
            .then(response => {
                console.log('Appointment created successfully', response.data);
                alert('Appointment created successfully!');
            })
            .catch(error => {
                console.error('Error sending appointment data to backend!', error);
                alert('Error sending appointment data to backend.');
            });
        console.log(formData)
    };

    return (
        <div className="container mx-auto px-4 py-6">
            <div className="text-3xl font-bold text-center text-gray-800 mb-6">Appointment Reservation</div>
            <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-lg p-8">
                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <label className="block font-semibold text-gray-700">Name *</label>
                        <input type="text" name="firstname" value={formData.firstname} onChange={handleInputChange} className="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="First Name" />
                        <input type="text" name="lastname" value={formData.lastname} onChange={handleInputChange} className="mt-2 border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Last Name" />
                    </div>
                    <div>
                        <label className="block font-semibold text-gray-700">Phone</label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="071 234 5678" />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-6 mt-4">
                    <div>
                        <label className="block font-semibold text-gray-700">Vehicle Type</label>
                        <input type="text" name="vehicle_type" value={formData.vehicle_type} onChange={handleInputChange} className="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div>
                        <label className="block font-semibold text-gray-700">Vehicle Number</label>
                        <input type="text" name="vehicle_no" value={formData.vehicle_no} onChange={handleInputChange} className="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                </div>
                {/* <div className="mt-4">
                    <label className="block font-semibold text-gray-700">Select services</label>
                    <div className="grid grid-cols-3 gap-4 text-gray-700">
                        <div>
                            <div>
                                <input type="checkbox" id="wash" name="Wash_and_Grooming" checked={formData.select_service.Wash_and_Grooming} onChange={handleInputChange} className="mr-2" />
                                <label htmlFor="wash">Wash and Grooming</label>
                            </div>
                            <div>
                                <input type="checkbox" id="lube" name="Lube_Service" checked={formData.select_service.Lube_Service} onChange={handleInputChange} className="mr-2" />
                                <label htmlFor="lube">Lube Services</label>
                            </div>
                            <div>
                                <input type="checkbox" id="detailing" name="Exterior_and_Interior_Detailing" checked={formData.select_service.Exterior_and_Interior_Detailing} onChange={handleInputChange} className="mr-2" />
                                <label htmlFor="detailing">Exterior & Interior Detailing</label>
                            </div>
                            <div>
                                <input type="checkbox" id="engine" name="Engine_Tune_Ups" checked={formData.select_service.Engine_Tune_Ups} onChange={handleInputChange} className="mr-2" />
                                <label htmlFor="engine">Engine Tune ups</label>
                            </div>
                        </div>
                        <div>
                            <div>
                                <input type="checkbox" id="undercarriage" name="Undercarriage_Degreasing" checked={formData.select_service.Undercarriage_Degreasing} onChange={handleInputChange} className="mr-2" />
                                <label htmlFor="undercarriage">Undercarriage Degreasing</label>
                            </div>
                            <div>
                                <input type="checkbox" id="windscreen" name="Windscreen_Treatments" checked={formData.select_service.Windscreen_Treatments} onChange={handleInputChange} className="mr-2" />
                                <label htmlFor="windscreen">Windscreen Treatments</label>
                            </div>
                            <div>
                                <input type="checkbox" id="inspection" name="Inspection_Reports" checked={formData.select_service.Inspection_Reports} onChange={handleInputChange} className="mr-2" />
                                <label htmlFor="inspection">Inspection Reports</label>
                            </div>
                            <div>
                                <input type="checkbox" id="wheel" name="Wheel_Alignment" checked={formData.select_service.Wheel_Alignment} onChange={handleInputChange} className="mr-2" />
                                <label htmlFor="wheel">Wheel Alignment</label>
                            </div>
                        </div>
                        <div>
                            <div>
                                <input type="checkbox" id="battery" name="Battery_Services" checked={formData.select_service.Battery_Services} onChange={handleInputChange} className="mr-2" />
                                <label htmlFor="battery">Battery Services</label>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="grid grid-cols-2 gap-6 mt-4">
                    <div>
                        <label className="block font-semibold text-gray-700">Date / Time</label>
                        <input type="date" name="date" value={formData.date} onChange={handleInputChange} className="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2" />
                        <input type="time" name="time" value={formData.time} onChange={handleInputChange} className="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                </div>
                <div className="mt-4">
                    <label className="block font-semibold text-gray-700">Anything Else?</label>
                    <textarea name="description" value={formData.description} onChange={handleInputChange} className="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" rows="3"></textarea>
                </div>

                {/* Appointment Type */}
                <div className="mt-4">
                    <label className="block font-semibold text-gray-700">Appointment Type</label>
                    <div className="mt-2">
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                className="form-radio text-blue-500"
                                name="appointment_type"
                                value="onStation"
                                checked={appointmentType === 'onStation'}
                                onChange={handleAppointmentTypeChange}
                            />
                            <span className="ml-2">On Station</span>
                        </label>
                        <label className="inline-flex items-center ml-6">
                            <input
                                type="radio"
                                className="form-radio text-blue-500"
                                name="appointment_type"
                                value="emergency"
                                checked={appointmentType === 'emergency'}
                                onChange={handleAppointmentTypeChange}
                            />
                            <span className="ml-2">Emergency</span>
                        </label>
                    </div>
                </div>

                {/* Emergency Location (if Emergency is selected) */}
                {appointmentType === 'emergency' && (
                    <div className="mt-4">
                        <label className="block font-semibold text-gray-700">Emergency Location</label>
                        <input
                            type="text"
                            name="emergencyLocation"
                            value={emergencyLocation}
                            onChange={handleEmergencyLocationChange}
                            className="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter location"
                        />
                    </div>
                )}
                <div className="mt-6 text-center">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AppointmentForm;
