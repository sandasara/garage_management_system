import React, { useEffect, useState } from 'react';
import axios from 'axios';

function JobDetails() {
    const [jobdetails, setJobDetails] = useState([]);
    const [selectedJob, setSelectedJob] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const [addMode, setAddMode] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetchJobDetails();
    }, []);

    const fetchJobDetails = () => {
        axios.get('http://localhost:5000/jobdetails')
            .then(response => {
                setJobDetails(response.data);
            })
            .catch(error => {
                console.error('Error fetching job details from backend!', error);
                alert('Error fetching job details from backend.');
            });
    };

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this job?")) {
            axios.delete(`http://localhost:5000/jobdetails/${id}`)
                .then(response => {
                    setMessage('Successfully deleted');
                    fetchJobDetails(); // Refresh the list
                })
                .catch(error => {
                    console.error('Error deleting job!', error);
                    alert('Error deleting job.');
                });
        }
    };

    const handleUpdate = (job) => {
        setSelectedJob(job);
        setEditMode(true);
        setAddMode(false);
    };

    const handleSave = (e) => {
        e.preventDefault();
        const url = editMode
            ? `http://localhost:5000/jobdetails/${selectedJob.job_id}`
            : 'http://localhost:5000/addjob';
        const method = editMode ? 'put' : 'post';

        axios({
            method: method,
            url: url,
            data: selectedJob
        })
            .then(response => {
                fetchJobDetails(); // Refresh the list
                setEditMode(false);
                setAddMode(false);
                setSelectedJob(null);
                setMessage(editMode ? 'Successfully updated' : 'Successfully added a new job');
            })
            .catch(error => {
                console.error('Error saving job!', error);
                alert('Error saving job.');
            });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSelectedJob({ ...selectedJob, [name]: value });
    };

    const handleAddNew = () => {
        setSelectedJob({
            job_id: '',
            name: '',
            type: '',
            start_date: '',
            estimate_end_date: '',
            actual_end_date: '',
            status: '',
            description: ''
        });
        setEditMode(false);
        setAddMode(true);
    };

    const handleStatusChange = (id, newStatus) => {
        axios.put(`http://localhost:5000/updateJobStatus`, { id, status: newStatus })
            .then(response => {
                setJobDetails(prevJobs => prevJobs.map(job => 
                    job.job_id === id ? { ...job, status: newStatus } : job
                ));
            })
            .catch(error => {
                console.error('Error updating job status!', error);
                alert('Error updating job status.');
            });
    };

    const getStatusClass = (status) => {
        switch (status) {
            case 'notstarted':
                return 'text-blue-500';
            case 'inprogress':
                return 'text-yellow-500';
            case 'completed':
                return 'text-green-500';
            case 'cancelled':
                return 'text-red-500';
            default:
                return '';
        }
    };

    return (
        <div className="container mx-auto px-4 py-6">
            <div className="text-3xl font-bold text-center text-gray-800 mb-6">Job Details</div>
            <div className="bg-white shadow-xl rounded-lg p-8">
                {message && (
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4" role="alert">
                        <span className="block sm:inline">{message}</span>
                    </div>
                )}
                <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-4"
                    onClick={handleAddNew}
                >
                    Add New Job
                </button>
                <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Job ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Job Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Start Date</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estimated End Date</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actual End Date</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {jobdetails.map((job, index) => (
                            <tr key={index}>
                                <td className="px-6 py-4 whitespace-nowrap">{job.job_id}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{job.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{job.type}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{job.start_date}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{job.estimate_end_date}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{job.actual_end_date}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{job.description}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <select
                                        value={job.status}
                                        onChange={(e) => handleStatusChange(job.job_id, e.target.value)}
                                        className={`status-dropdown ${getStatusClass(job.status)}`}
                                    >
                                        <option value="notstarted" className="text-blue-500">Not Started</option>
                                        <option value="inprogress" className="text-yellow-500">In Progress</option>
                                        <option value="completed" className="text-green-500">Completed</option>
                                        <option value="cancelled" className="text-red-500">Cancelled</option>
                                    </select>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <button
                                        className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
                                        onClick={() => handleUpdate(job)}
                                    >
                                        Update
                                    </button>
                                    <button
                                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
                                        onClick={() => handleDelete(job.job_id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {(editMode || addMode) && (
                <div className="mt-6">
                    <h2 className="text-2xl font-bold">{editMode ? 'Update Job' : 'Add New Job'}</h2>
                    <form onSubmit={handleSave} className="mt-4">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Job Name</label>
                            <input
                                type="text"
                                name="name"
                                value={selectedJob.name}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="type">Type</label>
                            <input
                                type="text"
                                name="type"
                                value={selectedJob.type}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="start_date">Start Date</label>
                            <input
                                type="date"
                                name="start_date"
                                value={selectedJob.start_date}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="estimate_end_date">Estimated End Date</label>
                            <input
                                type="date"
                                name="estimate_end_date"
                                value={selectedJob.estimate_end_date}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="actual_end_date">Actual End Date</label>
                            <input
                                type="date"
                                name="actual_end_date"
                                value={selectedJob.actual_end_date}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="status">Status</label>
                            <select
                                name="status"
                                value={selectedJob.status}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            >
                                <option value="notstarted" className="text-blue-500">Not Started</option>
                                <option value="inprogress" className="text-yellow-500">In Progress</option>
                                <option value="completed" className="text-green-500">Completed</option>
                                <option value="cancelled" className="text-red-500">Cancelled</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">Description</label>
                            <textarea
                                name="description"
                                value={selectedJob.description}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Save
                            </button>
                            <button
                                type="button"
                                onClick={() => { setEditMode(false); setAddMode(false); setSelectedJob(null); }}
                                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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

export default JobDetails;
