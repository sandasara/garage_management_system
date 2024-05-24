// components/AboutUs.js
import React from 'react';

const AboutUs = () => {
    return (
        <div className="bg-gray-100 p-10 flex">
            <img src="../images/image2.jpg" alt="About SK Motors" className="h-45 w-1/3 mr-8" />
            <div>
                <h2 className="text-3xl font-bold mb-4">ABOUT US</h2>
                <p className="mb-5">Welcome to SK Motors, a trusted garage located in Dambulla city. Founded by Mr. Sameera Herath in 2016, we have built a solid reputation for our expertise in repairing and maintaining cabs and lorries.</p> 
        
                <p className="mb-5">Our team of seven skilled employees is dedicated to providing exceptional service, whether you visit our garage or need on-site assistance. We also offer a spare parts shop attached to our garage to ensure we can meet all your vehicle needs efficiently.</p>

                <p className="mb-5">At SK Motors, we prioritize customer convenience. Our website allows you to log in, book appointments, track your vehicle's repair progress in real-time, and request on-site assistance for breakdowns.</p> 

                <p>We are committed to delivering high-quality service and ensuring your vehicle is always in top condition. Trust SK Motors for reliable and professional vehicle care.</p>
            </div>
        </div>
    );
};

export default AboutUs;
