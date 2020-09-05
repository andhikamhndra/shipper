import React from 'react';
import {Container, Col, Row, Navbar} from "react-bootstrap"
import logo from "../assets/img/shipper-logo.png"
import avatar from "../assets/img/avatar.jpeg"
import Sidebar from "../components/Sidebar"
import Content from "../components/Content"



function DriverManagement() {
  return (
    <div className="driver-management-page">
      <Container fluid>
        <Row>
          <Navbar>
            <Navbar></Navbar>
            <Navbar.Brand href="https://shipper.id/home"><img src={logo} alt="Shipper" className="logo"/></Navbar.Brand>
            <Navbar.Toggle/>
            <Navbar className="justify-content-end">
              <Navbar.Text>
                <span>Hello, <span className="username" href="#">Shipper User </span></span>
                <img src={avatar} alt="Shipper User" className="avatar"/>
              </Navbar.Text>
            </Navbar>
          </Navbar>
        </Row>

        <Row>
          <Col md={3} className="sidebar-wrapper">
              <Sidebar/>
          </Col>

          <Col md={9} className="content-wrapper">
              <Content/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default DriverManagement;
