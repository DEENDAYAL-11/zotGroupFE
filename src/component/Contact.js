import React, { useEffect, useState } from "react";
import { Container, Col, Row, Form, Button, Modal } from "react-bootstrap";
import { IoLocationSharp } from "react-icons/io5";
import { IoCall } from "react-icons/io5";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState({
    name: "",
    number: "",
    message: "",
  });
  const [isShow,setIsShow]= useState(false)
  const handleSubmit = () => {
    let isError = false,
      errorMess = {};
    Object.entries(formData).forEach(([key, value]) => {
      if (!value.trim() || (key === "number" && value.length !== 10)) {
        isError = true;
        errorMess[key] = `Please Provide ${key}`;
      } else {
        if (key === "name" || key === "message") {
          if (value.length < 3) {
            isError = true;
            errorMess[key] = `Please Provide at list 3 letter`;
          }
        }
      }
    });
    setErrorMessage({ ...errorMess });
    if (!isError) {
      setIsShow(true)
      setFormData({
        name: "",
        number: "",
        message: "",
      });
    }
  };
  useEffect(()=>{
    if(isShow){
      setTimeout(()=>{
        setIsShow(false)
      },3000)
    }
  },[isShow])
  return (
    <section className="contactUs">
      <Modal show={isShow}>
        <Modal.Header className="m-auto">
          <Modal.Title className="color-primary text1 ">Thank You</Modal.Title>
        </Modal.Header>
        <Modal.Body className="color-primary text3 text-center">Woohoo, Our Team Connect You Soon !</Modal.Body>
      </Modal>
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
                  Name<sup style={{ color: "red" }}>*</sup>
                </Form.Label>
                <Form.Control
                  type="text"
                  id="inputPassword5"
                  placeholder="Write your name here "
                  className="formText h-50px"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    setErrorMessage({ ...errorMessage, name: "" });
                  }}
                />
                <span className="errorMessage">{errorMessage.name} </span>
              </Col>
              <Col md={6} className="mb-3" sm={12}>
                <Form.Label htmlFor="inputPassword1 " className="color-white">
                  Mobile Number<sup style={{ color: "red" }}>*</sup>
                </Form.Label>
                <Form.Control
                  type="number"
                  id="inputPassword1"
                  placeholder="Write your mobile number here "
                  className="formText h-50px"
                  value={formData.number}
                  pattern="^\+(?:[0-9] ?){6,9}[0-9]$"
                  onChange={(e) => {
                    setFormData({ ...formData, number: e.target.value });
                    setErrorMessage({ ...errorMessage, number: "" });
                  }}
                  maxLength={10}
                />
                <span className="errorMessage">{errorMessage.number} </span>
              </Col>
              <Col md={12} sm={12} className="mb-3">
                <Form.Label htmlFor="inputPassword1 " className="color-white">
                  Message<sup style={{ color: "red" }}>*</sup>
                </Form.Label>
                <Form.Control
                  type="text"
                  id="inputPassword1"
                  placeholder="Write your message here "
                  as="textarea"
                  rows={4}
                  className="formText"
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    setErrorMessage({ ...errorMessage, message: "" });
                  }}
                />
                <span className="errorMessage">{errorMessage.message} </span>
              </Col>
              <Col className="text-right">
                <Button
                  className=" submitButton "
                  onClick={() => handleSubmit()}
                >
                  Submit
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactUs;
