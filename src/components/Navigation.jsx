import react from "react";
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import {Nav, Navbar} from 'react-bootstrap';
import {NavLink} from 'react-router-dom'
import '../App.css'

function Navigation(){
    return(
        <Navbar expand="lg" bg="white" style={{ marginLeft: 20, marginRight:20, marginTop:10}} >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse  id="basic-navbar-nav">
        <Nav style={{alignContent:'center'}}>
            <NavLink className='navBarLink' to="/" >Home &nbsp;</NavLink> 
            <NavLink className='navBarLink' to="/about-me"  >About  &nbsp;</NavLink> 
            <NavLink className='navBarLink' to="/portfolio-projects" >Portfolio &nbsp;</NavLink>
        </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation;