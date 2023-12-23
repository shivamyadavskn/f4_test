import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => (
  <div>
    <nav>
      <Link to="/">Login</Link>
      <Link to="/profile">Profile</Link>
    </nav>
    <main>{children}</main>
  </div>
);

export default Layout;
