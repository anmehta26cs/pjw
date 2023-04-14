// src/components/Navbar.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const activeStyle = {
    fontWeight: 'bold',
  };

  return (
    <nav className="bg-blue-500 p-4">
      <ul className="flex justify-around text-white">
        <li>
          <NavLink to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/team">
            Team
          </NavLink>
        </li>
        <li>
          <NavLink to="/join-us">
            Join Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
