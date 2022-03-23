import React from "react";
import logo from "../logo.jpg";
import {Link} from "react-scroll"

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link  className="navbar-brand" href="#">
          <img className="logo" src={logo} alt="logo..." />
        </Link >
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link smooth={true} to="home"  className="nav-link" href="#">
                Home <span className="sr-only"></span>
              </Link >
            </li>
            <li className="nav-item">
              <Link smooth={true} to="about" offset={-110}  className="nav-link" href="#">about</Link >
            </li>
            <li className="nav-item">
              <Link smooth={true} to="services" offset={-110} className="nav-link" href="#">Services</Link >
            </li>
            <li className="nav-item">
              <Link smooth={true} to="experience" offset={-110}  className="nav-link" href="#">Experience</Link >
            </li><li className="nav-item">
              <Link  className="nav-link" smooth={true} to="skills" offset={-110} href="#">Skills</Link >
            </li>
            <li className="nav-item">
              <Link smooth={true} to="contact" offset={-110}  className="nav-link" href="#">Contact</Link >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
