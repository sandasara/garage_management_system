import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook from react-router-dom

const WelcomePart = () => {
    const navigate = useNavigate(); // Initialize the navigate function

    // Function to handle navigation
    const handleNavigation = (path) => {
        navigate(path); // Navigate to the specified path
    }

    return (
        <div className="relative text-white">
            {/* Background Image */}
            <img src="/images/image6.jpg" className="w-full object-cover" />

            {/* Overlay Content */}
            <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center space-y-4 bg-black bg-opacity-50">
                <h1 className="text-5xl font-bold">WELCOME TO SK MOTORS</h1>
                <div className="flex space-x-4">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            onClick={() => handleNavigation('/signup')}>Sign Up</button>
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                            onClick={() => handleNavigation('/login')}>Log in</button>
                </div>
            </div>
        </div>
    );
};

export default WelcomePart;


