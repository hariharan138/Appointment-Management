import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <nav className="navbar">
        <Link to="/" className="navbar-logo">DocProfile</Link>
        <Link to="/meeting" className="meeting-button">Meeting</Link>
      </nav>
      <main className="main-content">
        {children}
      </main>
    </div>
  );
};

export default Layout;

