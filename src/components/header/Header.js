import React from "react";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">home</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/users">users</Nav.Link>
              <Nav.Link as={Link} to="/contact">contact</Nav.Link>
              <Nav.Link as={Link} to="/about">about</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* <NavLink
        to="/"
        style={({ isActive }) =>
          isActive ? { color: "red", borderBottom: "1px solid red" } : undefined
        }
      >
        home
      </NavLink>
      <NavLink
        to="/contact"
        style={({ isActive }) =>
          isActive ? { color: "red", borderBottom: "1px solid red" } : undefined
        }
      >
        contact
      </NavLink>
      <NavLink
        to="/about"
        style={({ isActive }) =>
          isActive ? { color: "red", borderBottom: "1px solid red" } : undefined
        }
      >
        about
      </NavLink>
      <NavLink
        to="/users"
        style={({ isActive }) =>
          isActive ? { color: "red", borderBottom: "1px solid red" } : undefined
        }
      >
        users
      </NavLink> */}
    </div>
  );
};

export default Header;
