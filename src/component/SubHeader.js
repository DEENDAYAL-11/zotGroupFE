import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import image from "../assets/zot.jpeg";

const SubHeader = () => {
  return (
    <>
      <section className="subHeaderSection ">
        <Navbar>
          <Container>
            <Navbar.Brand href="" className="logoSection">
              <img src={image} className="logo" />
              <br />
              <i className="subTitle">Smart Speed Perfect </i>
            </Navbar.Brand>
            <Nav className="ml-auto">
              <Nav.Link href="#section1">Home</Nav.Link>
              <Nav.Link href="#section2">Services</Nav.Link>
              <Nav.Link href="#section3">Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </section>
    </>
  );
};

export default SubHeader;
