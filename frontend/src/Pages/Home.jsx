// pages/Home.js
import React from 'react';
import LogoBar from '../components/Logo/LogoBar.jsx';
import Header from '../components/Header/Header.jsx';
import WelcomePart from '../components/HomePage/Welcome.jsx';
import AboutUs from '../components/HomePage/AboutUs.jsx';
import WhatWeOffer from '../components/HomePage/WhatWeOffer.jsx';
import Footer from '../components/Footer/Footer.jsx';

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <LogoBar />
            <Header />
            <div className="flex-grow">
                <WelcomePart />
                <AboutUs />
                <WhatWeOffer />
            </div>
            <Footer />
        </div>
    );
};

export default Home;

