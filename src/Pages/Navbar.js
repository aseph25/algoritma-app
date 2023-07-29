// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/soal1">Soal 1</Link>
        </li>
        <li>
          <Link to="/soal2">Soal 2</Link>
        </li>
        <li>
          <Link to="/soal3">Soal 3</Link>
        </li>
        <li>
          <Link to="/soal4">Soal 4</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
