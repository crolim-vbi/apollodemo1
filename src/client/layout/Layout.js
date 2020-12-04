import React from 'react';

import Navbar from '../partials/Navbar';
import Footer from '../partials/Footer';

const Layout = ({ children }) => {
    return (
      <>
        <Navbar />
        
        <div className="mainWrap">
          {children}
        </div>
        
        <Footer />
      </>
    );
  };


  export default Layout;  