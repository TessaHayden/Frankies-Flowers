import React, { useState } from "react";
import {NavLink} from 'react-router-dom'
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
  Collapse,
} from "reactstrap";
import "animate.css";
import Images from "../constants/images";
import "../css/Header.css";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };


  return (
    <>
      <header>
        <Navbar sticky="top" expand="md">
          <div className="container">
            <NavbarBrand className="mr-auto" href="/home">
              <img
                className="img-fluid"
                src={Images.frankielogo}
                alt="logo for Frankie's Flowers"
                height="90"
                width="350"
              />
            </NavbarBrand>
            <NavbarToggler onClick={toggleNav} />
            <Collapse isOpen={isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/about">
                    About
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/flowers">
                    Flowers
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </header>
    </>
  );
};
export default Header;
