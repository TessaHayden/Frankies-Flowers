import React from "react";
import { NavLink } from "react-router-dom";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";
import '../css/Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col col-sm-4">
            <ul className="list-unstyled">
              <li>
                <NavLink to="/home">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/flowers">Flowers</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>

          <div className="col col-xs-3 col-sm-6 text-center">
            <h5>Social</h5>
            <a
              className="btn btn-social-icon btn-instagram"
              href="https://www.instagram.com/frankies__flowers/"
            >
              <FaInstagram size={40} />
            </a>
            <a href="https://www.facebook.com/frankies.flowers.hw/">
              <FaFacebookSquare size={39} color="black" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
