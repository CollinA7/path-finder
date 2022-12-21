import React from 'react'
import Auth from '../../utils/auth'
import { Link, NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Badge from 'react-bootstrap/Badge'

function Navi() {
    function showNavigation() {
        if (Auth.loggedIn()) {
            return (
                <Container>
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

    return (
        <Navbar className="navb">
            <header className="head">
                <h1>
                    <Link to="/" text="warning" className="navtext">
                        <span style={{ fontFamily: 'Lobster' }} role="img">
                            Path-finder ⛰
                        </span>
                    </Link>
                </h1>
                {showNavigation()}
            </header>
        </Navbar>
    )
}

export default Navi
