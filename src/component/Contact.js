import React from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import { IoLocationSharp } from "react-icons/io5";
import { IoCall } from "react-icons/io5";

const ContactUs = () => {
  return (
    <section className="contactUs">
      <Container>
        <Row>
          <Col md={5} sm={12}>
            <div className="heading1  mt-5 mb-2 text-center color-white">
              Address
            </div>
            <Row>
              <Col md={1}>
                <IoLocationSharp style={{ color: "#fff" }} />
              </Col>
              <Col>
                <address className="form-label color-white">
                  <i>
                    Jaipur Office: C16,SN Residency ,Mangalam City,
                    <br /> Kalwad Rd, Jaipur
                  </i>
                </address>
              </Col>
            </Row>
            <Row>
              <Col md={1}>
                <IoLocationSharp style={{ color: "#fff" }} />
              </Col>
              <Col>
                <address className="form-label color-white">
                  <i>
                    Sikar office:1st floor,Govind market,
                    <br /> Sheetala Chowk,Sikar.
                  </i>
                </address>
              </Col>
            </Row>
            <Row>
              <Col md={1}>
                <IoCall style={{ color: "#fff" }} />
              </Col>
              <Col>
                <address className="form-label color-white">
                  <i>+91-9694254591</i>
                </address>
              </Col>
            </Row>
          </Col>
          <Col md={1}></Col>
          <Col md={6} sm={12}>
            <div className="heading1  mt-5 mb-2 text-center color-white">
              Contact us
            </div>
            <Row>
              <Col md={6} className="mb-3" sm={12}>
                <Form.Label htmlFor="inputPassword5 " className="color-white">
                  Name
                </Form.Label>
                <Form.Control
                  type="text"
                  id="inputPassword5"
                  placeholder="Write your name here "
                  className="form-label h-50"
                />
              </Col>
              <Col md={6} className="mb-3" sm={12}>
                <Form.Label htmlFor="inputPassword1 " className="color-white">
                  Mobile Number
                </Form.Label>
                <Form.Control
                  type="text"
                  id="inputPassword1"
                  placeholder="Write your mobile number here "
                  pattern=""
                  maxLength={10}
                  className="form-label h-50"
                />
              </Col>
              <Col md={12} sm={12} className="mb-3">
                <Form.Label htmlFor="inputPassword1 " className="color-white">
                  Message
                </Form.Label>
                <Form.Control
                  type="text"
                  id="inputPassword1"
                  placeholder="Write your message here "
                  as="textarea"
                  rows={4}
                  className="form-label"
                />
              </Col>
              <Col className="text-right">
                <Button className=" submitButton ">Submit</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactUs;
