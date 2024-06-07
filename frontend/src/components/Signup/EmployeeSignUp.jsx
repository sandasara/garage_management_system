import React, { useState } from 'react';
import Axios from "axios";

function EmployeeSignUp() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [signupStatus, setSignupStatus] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:5000/signup", {
      firstname: firstname,
      lastname: lastname,
      username: username,
      email: email,
      phone: phone,
      password: password,
      role: 'employee'
    }).then((response) => {
      if (response.data.message) {
        setSignupStatus(response.data.message);
      } else {
        setSignupStatus("Account Created Successfully");
      }
    }).catch(error => {
      console.error('Signup error:', error);
      setSignupStatus("Signup failed: " + error.message);
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="p-8 bg-white rounded shadow-md w-full max-w-md">
        <h2 className="text-lg font-bold mb-6 text-center">Employee Sign Up</h2>
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">First Name</label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              required
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter Your First Name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">Last Name</label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              required
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter Your Last Name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter Your UserName"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              type="text"
              name="phone"
              id="phone"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter Your Phone Number"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter Your Password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign Up
          </button>
          {signupStatus && <div className="text-center text-sm mt-4 text-red-500">{signupStatus}</div>}
        </form>
      </div>
    </div>
  );
}

export default EmployeeSignUp;
