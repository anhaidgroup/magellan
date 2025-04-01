import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="navbar">
      <div className="navbar-left">
        <Link to="/">
          <img
            src="/magellan_ship_image.gif"
            alt="Magellan Ship"
            className="navbar-logo"
          />
        </Link>
        <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
          ☰
        </button>
      </div>

      <nav className={`navbar-right ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/code">Code</Link>
          </li>
          <li>
            <Link to="/data">Data</Link>
          </li>
          <li>
            <Link to="/case-studies">Case Studies</Link>
          </li>
          <li>
            <Link to="/lessons-learned">Lessons Learned</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
