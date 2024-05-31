import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ViewFeedback() {
    const [feedback, setFeedback] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/viewfeedback')
            .then(response => {
                setFeedback(response.data);
            })
            .catch(error => {
                console.error('Error fetching feedback data from backend!', error);
                alert('Error fetching feedback data from backend.');
            });
    }, []);

    return (
        
           <div className="flex-grow p-8 bg-gray-100">
                <div className="text-3xl font-bold text-center text-gray-800 mb-6">View Feedback</div>
                <div className="bg-white shadow-xl rounded-lg p-8">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead>
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Feedback ID</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Content</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {feedback.map((item, index) => (
                                <tr key={index}>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.feedback_id}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.email}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.content}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
       
    );
}

export default ViewFeedback;
