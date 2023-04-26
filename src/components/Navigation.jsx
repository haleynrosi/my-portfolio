import react from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Nav, Navbar} from 'react-bootstrap';
import {NavLink} from 'react-router-dom'
import '../App.css'

function Navigation(){
    return(
        <Navbar expand="lg" bg="light" >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"/>
        <Nav >
            <NavLink className='navBarLink' exact to="/" activeClassName='activeClicked' >Home</NavLink>
            <NavLink className='navBarLink' exact to="/about-me" activeClassName='activeClicked' >About</NavLink>
            <NavLink className='navBarLink' exact to="/portfolio-projects" activeClassName='activeClicked' >Projects</NavLink>
            <NavLink className='navBarLink' exact to="/contact-me" activeClassName='activeClicked' >Contact</NavLink>
        </Nav>
        </Navbar>
    )
}

export default Navigation;