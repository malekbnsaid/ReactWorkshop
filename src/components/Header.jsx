import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';

export default function Header() {
  const id = "1";
  const title = "test";

  return (
    <>
      <Navbar bg="light" expand="lg">
        
          <Nav className="mr-auto">
            <NavLink to="/events" style={({ isActive }) => ({ textDecoration: isActive ? "underline" : "none" })}>Events</NavLink>
            <NavLink  to="/products" style={({ isActive }) => ({ textDecoration: isActive ? "underline" : "none" })}>Products</NavLink>
            <NavLink  to="/counter" style={({ isActive }) => ({ textDecoration: isActive ? "underline" : "none" })}>Counter</NavLink>
          </Nav>
      </Navbar>
    </>
  );
}
