import React from 'react';
import { Link, Switch, Route } from "react-router-dom"
import '../App.css';
import logo from '../images/logo2.png'
import { BiUserPin, BiHomeAlt } from "react-icons/bi";
import { BsFilePost } from "react-icons/bs";
import Navbar from 'react-bootstrap/Navbar'
import { Nav, NavDropdown } from "react-bootstrap";

const Header = () => {

    return (
        <Navbar collapseOnSelect expand="lg" variant="dark">
            <Link className={"navbar-brand"}>
                <img src={logo} alt="logo" style={{ maxWidth: "220px" }} />
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Link to="/" className="textitem nav-link"> <BiHomeAlt /> Home</Link >
                    <Link to="/Posts" className="textitem nav-link"><BsFilePost /> Posts</Link>
                    <Link to="/AboutUs" className="textitem nav-link" ><BiUserPin /> About Us</Link> &nbsp;&nbsp;
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}


export default Header