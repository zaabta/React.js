import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="link" to="/">
        <div className="navbar-icon">
          <img src={process.env.PUBLIC_URL + "assert/youthink.logo.svg"} />
        </div>
      </Link>
      <nav className="nav-menu">
        <ul className="nav-menu-list">
          <Link className="link nav-menu-item" to="/home">
            <li className="nav-menu-item">home</li>
          </Link>
          <Link className="link nav-menu-item" to="/blog">
            <li className="nav-menu-item">blog</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
