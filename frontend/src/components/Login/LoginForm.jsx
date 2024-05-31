import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import Axios from "axios";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const navigate = useNavigate(); 
    
  const handleLogin = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:5000/login", {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data === 'exist') {
        // setLoginStatus(response.data);
        navigate('/');
      } else {
        setLoginStatus("Login failed. Check credentials.");
      }
      console.log(response.data)
    }).catch(error => {
      console.error('Login error:', error);
      setLoginStatus("Login failed: " + error.message);
    });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="p-8 bg-white rounded shadow-md">
        <h2 className="text-lg font-bold mb-6 text-center">Log In</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input type="text" name="username" id="username" 
              onChange={(e) => setUsername(e.target.value)} required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" name="password" id="password" 
              onChange={(e) => setPassword(e.target.value)} required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
          </div>
          <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Log In
          </button>
          {loginStatus && <div className="text-center text-red-500 mt-2">{loginStatus}</div>}
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
