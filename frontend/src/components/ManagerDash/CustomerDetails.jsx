import React, { useEffect, useState } from 'react';
import axios from 'axios';

function EmployeeDetails() {
    const [employees, setEmployees] = useState([]);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        fetchEmployees();
    }, []);

    const fetchEmployees = () => {
        axios.get('http://localhost:5000/customerdetails')
            .then(response => {
                setEmployees(response.data);
            })
            .catch(error => {
                console.error('Error fetching customer data from backend!', error);
                alert('Error fetching customer data from backend.');
            });
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/customer/${id}`)
            .then(response => {
                fetchEmployees(); // Refresh the list
            })
            .catch(error => {
                console.error('Error deleting customer!', error);
                alert('Error deleting customer.');
            });
    };

    const handleUpdate = (customer) => {
        setSelectedEmployee(customer);
        setEditMode(true);
    };

    const handleSave = () => {
        axios.put(`http://localhost:5000/customer/${selectedCustomer.customer_id}`, selectedEmployee)
            .then(response => {
                fetchCustomer(); // Refresh the list
                setEditMode(false);
                setSelectedCustomer(null);
            })
            .catch(error => {
                console.error('Error updating customer!', error);
                alert('Error updating customer.');
            });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSelectedEmployee({ ...selectedCustomer, [name]: value });
    };

    return (
        <div className="container mx-auto px-4 py-6">
            <div className="text-3xl font-bold text-center text-gray-800 mb-6">Customer Details</div>
            <div className="bg-white shadow-xl rounded-lg p-8">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">First Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Address</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {employees.map((customer, index) => (
                            <tr key={index}>
                                <td className="px-6 py-4 whitespace-nowrap">{customer.employee_id}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{customer.firstname}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{customer.lastname}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{customer.email}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{customer.phone}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{customer.address}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <button
                                        className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
                                        onClick={() => handleUpdate(employee)}
                                    >
                                        Update
                                    </button>
                                    <button
                                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
                                        onClick={() => handleDelete(employee.employee_id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {editMode && (
                <div className="bg-white shadow-xl rounded-lg p-8 mt-6">
                    <div className="text-2xl font-bold text-center text-gray-800 mb-6">Edit Employee Details</div>
                    <form onSubmit={handleSave}>
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Employee ID</label>
                                <input
                                    type="text"
                                    name="employee_id"
                                    value={selectedEmployee.employee_id}
                                    onChange={handleChange}
                                    disabled
                                    className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Employee Type</label>
                                <input
                                    type="text"
                                    name="employee_type"
                                    value={selectedEmployee.employee_type}
                                    onChange={handleChange}
                                    className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">First Name</label>
                                <input
                                    type="text"
                                    name="firstname"
                                    value={selectedEmployee.firstname}
                                    onChange={handleChange}
                                    className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Last Name</label>
                                <input
                                    type="text"
                                    name="lastname"
                                    value={selectedEmployee.lastname}
                                    onChange={handleChange}
                                    className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={selectedEmployee.email}
                                    onChange={handleChange}
                                    className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Phone</label>
                                <input
                                    type="text"
                                    name="phone"
                                    value={selectedEmployee.phone}
                                    onChange={handleChange}
                                    className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Address</label>
                                <input
                                    type="text"
                                    name="address"
                                    value={selectedEmployee.address}
                                    onChange={handleChange}
                                    className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                            </div>
                        </div>
                        <div className="mt-6 flex justify-center">
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Save
                            </button>
                            <button
                                type="button"
                                onClick={() => { setEditMode(false); setSelectedEmployee(null); }}
                                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-4"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
}

export default EmployeeDetails;
