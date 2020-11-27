import React from 'react';
import PropTypes from 'prop-types';

import Navbar from '../components/Navbar/Navbar';
import Navbar2 from '../components/Navbar2/Navbar2';
import Footer from '../components/Footer/Footer';
import './styles.css';

const Layout = (props) => {
  return (
    <>
      <Navbar />
      <Navbar2 />
        <div className="container">{props.children}</div>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
