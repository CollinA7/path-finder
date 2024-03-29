
import React from "react";
import Auth from "../../utils/auth";
import { Link, NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Badge from 'react-bootstrap/Badge'; 
import Button from "react-bootstrap/esm/Button";




function Navi() {
    function showNavigation() {
        if (Auth.loggedIn()) {
            return (
                <Container>
                    <Nav>
                        <ul className="f">
                            <li className="mx-1">
                                {/* this is not using the Link component to logout or user and then refresh the application to the start */}
                                <Nav.Link href="/" onClick={() => Auth.logout()}>
                                    Logout
                                </Nav.Link>
                            </li>
                        </ul>
                    </Nav>
                </Container>
            )
        } else {
            return (
                <Container>
                    <Nav>
                        <Nav.Item>
                            <li className="mx-1">
                                <Badge pill bg="warning">
                                    <Link to="/signup" className="signup">
                                        Signup
                                    </Link>
                                </Badge>
                            </li>
                        </Nav.Item>
                        <li className="mx-2">
                            <Badge pill bg="warning">
                                <Link to="/login" className="login">
                                    Login
                                </Link>
                            </Badge>
                        </li>
                    </Nav>
                </Container>
            )
        }
    }


  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <Container >
          <Nav>
        <ul className="f">
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
        </Nav>
        </Container>
      );
    } else {
      return (
        <Container>
          <Nav className="justify-content-center">
            <Nav.Link>
          <li className="mx-1">
            <Button variant="warning" size="lg">
            <Link to="/signup" className="signup">
              <strong>Signup</strong>
            </Link>
            </Button>
          </li>
          </Nav.Link>
          <Nav.Link>
          <li className="mx-2">
            <Button variant="warning" size="lg">
            <Link to="/login" className="login">
            <strong>Login</strong>
            </Link>
            </Button>
          </li>
          </Nav.Link>
        </Nav>
        </Container>
      );
      }}

  return (
    
    <Nav className="justify-content-center" >
    <header className="head">
      <h1>
        <Link to="/parks" text='warning' className="navtext">
          <span style={{fontFamily: 'Lobster'}} role="img" >⛰Path-finder⛰</span>
          <h2 style={{fontFamily:'Abril Fatface'}}> Click 'Pathfinder' to find your way!</h2>
        </Link>
      </h1>
      <Nav.Link className="justify-content-center">
        {showNavigation()}
        </Nav.Link>    
    </header>
    </Nav>
    
  );
  


}

export default Navi
