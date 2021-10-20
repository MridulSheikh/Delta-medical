import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import {Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import "./Header.css"
const Header = () => {
  const {user,Logout} = useAuth();
    const activeStyle ={
        color:"#fff"
    }
    return (
        <>
        <Navbar className="navbar" variant="dark" sticky="top">
        <Container>
        <Navbar.Brand to="/home">
        <Link to="/home" className="text-decoration-none"><h3 className="text-light logo"><i className="fas fa-heartbeat"></i> <span className="hidden"> Delta medical</span></h3></Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <Nav.Link as={NavLink}  to="/home" className=" text-decoration-none fs-4  menu-item" activeStyle={activeStyle}><i className="fas fa-home"></i></Nav.Link>
        <Nav.Link as={NavLink}  to="/service" className="text-decoration-none fs-4  menu-item" activeStyle={activeStyle}><i className="fas fa-medkit"></i></Nav.Link>
        <Nav.Link as={NavLink}  to="/about" className="text-decoration-none fs-4 menu-item" activeStyle={activeStyle}><i className="fas fa-info-circle"></i></Nav.Link>
          <Navbar.Text className="ms-lg-5 text-light singin d-flex aling-items-center">
          {
            user.photoURL ? <img src={user.photoURL} alt="" width="30px" className="photo"/> : user.email && <i className="fas fa-user-circle fs-3 unperson text-danger"></i>
          }
          {
            user.displayName &&  <span className="ms-2 me-3 username">{user.displayName}</span>
          }
           { user.email ? <button onClick={Logout} className="logoutbutton border-0 bg-danger text-light"><i className="fas fa-sign-out-alt"></i> </button>: 
          <Link to="/login" className="text-decoration-none fs-5">
          <i className="fas fa-user-plus"></i> <span className="hidden">Login Now</span>
          </Link>
        }
          
          </Navbar.Text>
        </Navbar.Collapse>
        <Nav className="me-auto">
         
        </Nav>
        </Container>
      </Navbar>
        </>
    );
};

export default Header;