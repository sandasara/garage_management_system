import React from 'react';

const WhatWeOffer = () => {
    return (
        <div className="bg-black text-white p-10">
            <h2 className="text-3xl font-bold text-center mb-6">WHAT WE OFFER</h2>
            <div className="flex justify-around">
                <div className="text-center bg-white  text-black p-4">
                    <img src="/images/image3.jpg" alt="Maintenance" className="w-50 h-32 object-cover mx-auto mb-2" />
                    <h3 className="font-semibold">Maintenance</h3>
                    <p>Regular checkups to maintain your vehicle's high performance.</p>
                </div>
                <div className="text-center bg-white text-black p-4">
                    <img src="../images/image4.jpg" alt="Repair" className="w-48 h-32 object-cover mx-auto mb-2" />
                    <h3 className="font-semibold">Repair</h3>
                    <p>Quality service that guarantees smooth and safe rides.</p>
                </div>
                <div className="text-center bg-white text-black p-4">
                    <img src="../images/image5.png" alt="Parts/Accessories" className="w-48 h-32 object-cover mx-auto mb-2" />
                    <h3 className="font-semibold">Parts/Accessories</h3>
                    <p>Interior parts and premium exteriors for standout style.</p>
                </div>
            </div>
        </div>
    );
};

export default WhatWeOffer;
