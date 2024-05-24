import React, { useState } from 'react';

const AppointmentForm = () => {
    const [appointmentType, setAppointmentType] = useState('onStation');
    const [emergencyLocation, setEmergencyLocation] = useState('');

    const handleAppointmentTypeChange = (e) => {
        setAppointmentType(e.target.value);
    };

    const handleEmergencyLocationChange = (e) => {
        setEmergencyLocation(e.target.value);
    };

    return (
        <div className="container mx-auto px-4 py-6">
            <div className="text-3xl font-bold text-center text-gray-800 mb-6">Appointment Reservation</div>
            <form className="bg-white shadow-xl rounded-lg p-8">
                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <label className="block font-semibold text-gray-700">Name *</label>
                        <input type="text" placeholder="First" className="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <input type="text" placeholder="Last" className="mt-2 border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div>
                        <label className="block font-semibold text-gray-700">Phone</label>
                        <input type="tel" className="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="071 234 5678" />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-6 mt-4">
                    <div>
                        <label className="block font-semibold text-gray-700">Vehicle Type</label>
                        <input type="text" className="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div>
                        <label className="block font-semibold text-gray-700">Vehicle Number</label>
                        <input type="text" className="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                </div>
                <div className="mt-4">
                    <label className="block font-semibold text-gray-700">Select services</label>
                    <div className="grid grid-cols-3 gap-4 text-gray-700">
                        <div>
                            <div><input type="checkbox" id="wash" className="mr-2" /> <label htmlFor="wash">Wash and Grooming</label></div>
                            <div><input type="checkbox" id="lube" className="mr-2" /> <label htmlFor="lube">Lube Services</label></div>
                            <div><input type="checkbox" id="detailing" className="mr-2" /> <label htmlFor="detailing">Exterior & Interior Detailing</label></div>
                            <div><input type="checkbox" id="engine" className="mr-2" /> <label htmlFor="engine">Engine Tune ups</label></div>
                        </div>
                        <div>
                            <div><input type="checkbox" id="undercarriage" className="mr-2" /> <label htmlFor="undercarriage">Undercarriage Degreasing</label></div>
                            <div><input type="checkbox" id="windscreen" className="mr-2" /> <label htmlFor="windscreen">Windscreen Treatments</label></div>
                            <div><input type="checkbox" id="inspection" className="mr-2" /> <label htmlFor="inspection">Inspection Reports</label></div>
                            <div><input type="checkbox" id="insurance" className="mr-2" /> <label htmlFor="insurance">Insurance Claims</label></div>
                        </div>
                        <div>
                            <div><input type="checkbox" id="hybrid" className="mr-2" /> <label htmlFor="hybrid">Hybrid Services</label></div>
                            <div><input type="checkbox" id="wheel" className="mr-2" /> <label htmlFor="wheel">Wheel Alignment</label></div>
                            <div><input type="checkbox" id="battery" className="mr-2" /> <label htmlFor="battery">Battery Services</label></div>
                            <div><input type="checkbox" id="nano" className="mr-2" /> <label htmlFor="nano">Nano Treatments</label></div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-6 mt-4">
                    <div>
                        <label className="block font-semibold text-gray-700">Date / Time</label>
                        <input type="date" className="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2" />
                        <input type="time" className="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                </div>
                <div className="mt-4">
                    <label className="block font-semibold text-gray-700">Anything Else?</label>
                    <textarea className="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" rows="3"></textarea>
                </div>

                {/* Appointment Type */}
                <div className="mt-4">
                    <label className="block font-semibold text-gray-700">Appointment Type</label>
                    <div className="mt-2">
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                className="form-radio text-blue-500"
                                name="appointmentType"
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
                                name="appointmentType"
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
                            className="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter location"
                            value={emergencyLocation}
                            onChange={handleEmergencyLocationChange}
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
};

export default AppointmentForm;
