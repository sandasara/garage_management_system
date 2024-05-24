import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6">
      <div className="container mx-auto flex flex-wrap justify-between items-start md:items-center">

        {/* Left Section: Logo and Tagline */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-lg font-bold">SK Motors</h2>
          <p className="mt-2">"Empowering Your Journey: SK Motors </p> <p>  Where Precision Meets Performance"</p>
          <div className="flex mt-4">
            {/* Replace these divs with actual image tags if you have icons */}
            <div className="h-8 w-8 bg-gray-700 mr-2"></div>
            <div className="h-8 w-8 bg-gray-700 mr-2"></div>
            <div className="h-8 w-8 bg-gray-700"></div>
          </div>
        </div>
        
        {/* Center Section: Navigation */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-bold">Navigation</h3>
          <ul className="mt-2">
            <li><a href="/" className="hover:text-gray-300">Home</a></li>
            <li><a href="/Appointment" className="hover:text-gray-300">Appointment</a></li>
            <li><a href="/Contact" className="hover:text-gray-300">Contact</a></li>
            <li><a href="/Signin" className="hover:text-gray-300">Signin</a></li>
            <li><a href="/Login" className="hover:text-gray-300">Login</a></li>
          </ul>
        </div>

        {/* Right Section: Contact Info */}
        <div>
          <h3 className="text-lg font-bold">Contact</h3>
          <address className="not-italic mt-2">
            SK motors, Kurunegala Road, Dambulla<br />
            +94 77 194 9223<br />
            <a href="mailto:skmotorsi92@gmail.com" className="hover:text-gray-300">skmotorsi92@gmail.com</a>
          </address>
        </div>
      </div>
      <div className="text-center mt-6 border-t border-white pt-4">
        Copyright ©2023 All rights reserved
      </div>
    </footer>
  );
};

export default Footer;

