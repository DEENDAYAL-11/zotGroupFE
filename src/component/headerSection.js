import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMailOpen } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaSquareYoutube } from "react-icons/fa6";


const HeaderSection = () => {
  const whatsappUrl = `https://wa.me/+91850401808?text=${encodeURIComponent(
    "hello Zot Group !"
  )}`;

  return (
    <>
      <section className="headerSection">
        <Container>
          <Row>
            <Col md={6} sm={12}>
              <Row>
                <Col md={4} sm={12}>
                  <FaPhoneAlt style={{ color: "#fff" }} size={16} />{" "}
                  <span className="color-white font-12">+91-850401808</span>
                </Col>
                <Col md={5} sm={12}>
                  <IoIosMailOpen style={{ color: "#fff" }} size={16} />{" "}
                  <span className="color-white font-12">
                    Zotgroupindia@gmail.com
                  </span>
                </Col>
              </Row>
            </Col>
            <Col md={6} className="headerRight">
              <div>
                <a
                  href="https://www.facebook.com/ZotConstructionAndDesigner/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookSquare style={{ color: "#fff" }} size={20} />
                </a>
              </div>
              <div>
                <a
                  href="https://www.instagram.com/zot_groupindia.official/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagramSquare style={{ color: "#fff" }} size={20} />
                </a>
              </div>
              <div>
                <a
                  href="https://www.youtube.com/channel/UCWJo21u5lrRs0sywM_Rm5Og"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaSquareYoutube style={{ color: "#fff" }} size={20} />
                </a>
              </div>
              <div>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <FaWhatsappSquare style={{ color: "#fff" }} size={20} />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HeaderSection;
