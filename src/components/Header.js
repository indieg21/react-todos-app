import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = () => {
  return (
    <header className="header">
      <div className="ui secondary pointing menu header">
        <Link to="/" className="item">
          <h1>React Todo App</h1>
        </Link>
        <div className="right menu">
          <GoogleAuth />
        </div>
      </div>
    </header>
  );
};

export default Header;
