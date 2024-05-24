import React from 'react';

const LogoBar = () => {
  return (
    <div className="bg-white text-black flex items-center justify-between px-2 py-0">
      <img src="../images/SKlogo.png" className="h-20 mr-10" />
      <div className="flex items-center space-x-10">
        <div className="flex items-center">
          <img src="../images/Phone.png" className="h-10 mr-2" />
          <span>+94 77 194 9223</span>
        </div>
        <div className="flex items-center">
          <img src="../images/Time.png" className="h-10 mr-2" />
          <span>Monday - Saturday | 9AM - 7PM</span>
        </div>
        <div className="flex items-center">
          <img src="../images/Location.png" className="h-10 mr-2" />
          <span>SK Motors, Kurunegala Road, Dambulla</span>
        </div>
      </div>
    </div>
  );
};

export default LogoBar;
