import React from "react";
import { Container, Navbar ,Nav} from "react-bootstrap";
import image from "../assets/zot.jpeg";

const SubHeader = () => {
  return (
    <>
      <section className="subHeaderSection ">
        <Navbar>
          <Container>
            <Navbar.Brand href="" className="logoSection">
            <img src={image} className="logo"/>
            <br/>
            <i className="subTitle">Smart Speed Perfect </i>
            </Navbar.Brand>
            <Nav className="ml-auto">
              <Nav.Link href="">Home</Nav.Link>
              <Nav.Link href="">Services</Nav.Link>
              <Nav.Link href="">Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </section>
    </>
  );
};

export default SubHeader;
