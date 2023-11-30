import React from 'react';
import Header from './_Header';
import Footer from './_Footer';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div style={{ minHeight: 'calc(100vh - 160px)' }}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
