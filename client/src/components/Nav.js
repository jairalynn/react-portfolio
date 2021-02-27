import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
    <h1 className="title">Jaira Arcilla</h1>
      <Link to="/about"></Link>
      <Link to="/contact"></Link>
      <Link to="/portfolio"></Link>
    </nav>
  );
}

export default Nav;
