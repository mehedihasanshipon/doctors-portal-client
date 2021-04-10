import React from "react";
import { Nav ,Navbar} from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg"  variant="light">
      {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
          <Link className="nav-link ms-4" href="#features">Home</Link>
          <Link className="nav-link ms-4" href="#pricing">About</Link>
          <Link className="nav-link ms-4 text-white" href="#features">Dental service</Link>
          <Link className="nav-link ms-4 text-white" href="#pricing">Reviews</Link>
          <Link className="nav-link ms-4 text-white" href="#features">Blog</Link>
          <Link className="nav-link ms-4 text-white" href="#pricing">Contact Us</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
