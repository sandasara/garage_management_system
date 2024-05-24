import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import LogoBar from '../Logo/LogoBar';


const Layout = ({ children }) => {
  return (
    <div>
      <LogoBar/>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;