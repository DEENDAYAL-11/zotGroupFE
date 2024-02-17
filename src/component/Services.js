import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import banner from "../assets/s2.jpg";
import architectureIcon from "../assets/architecturedesigning.jpeg";
import structuraldesigningIcon from "../assets/Structuraldesigning.jpg";
import interiordesigningIcon from "../assets/Interiordesigning.jpg";
import vastuconsultantIcon from "../assets/Vastuconsultant.png";
import constructionIcon from "../assets/Construction.jpg";
import realEstateIcon from "../assets/Real Estate.jpeg";
import financeIcon from "../assets/FINANCE.jpg";

const Services = () => {
  return (
    <div className="mt-5">
      <Row>
        <Col md={6}>
          <div className="color-primary text1 mb-2">
            OUR MOTTO IS OUR VISION
          </div>
          <div className="color-primary text2 mb-2">
            Together we build your ideal home
          </div>
          <div className="text3 color-gray subTextStyle">
            <i>
              Creating a world with all the possibilities in building creative
              homes. The whole process of constructing a home can be simple but
              the ultimate customer satisfaction is what we always focus upon.
              To witness the happy faces and harmony spread around while
              stepping into a whole new chapter of life is all we have set our
              heart upon.
            </i>
          </div>
        </Col>
        <Col md={6}>
          <img src={banner} className="bannerImage" />
        </Col>
      </Row>
      <Col className="heading1 color-primary mt-5 mb-2 text-center">
        {" "}
        OUR SERVICES
      </Col>
      <Row>
        <Col className="mb-3" md={4}>
          <Card>
            <Card.Img variant="top" src={architectureIcon} />
            <Card.Body>
              <Card.Title className="color-primary text2 mb-2">
                Architecture designing
              </Card.Title>
              <Card.Text className="text3 color-gray subTextStyle line-height-1">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="mb-3" md={4}>
          <Card>
            <Card.Img variant="top" src={structuraldesigningIcon} />
            <Card.Body>
              <Card.Title className="color-primary text2 mb-2">
                Structural designing
              </Card.Title>
              <Card.Text className="text3 color-gray subTextStyle line-height-1">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="mb-3" md={4}>
          <Card>
            <Card.Img variant="top" src={interiordesigningIcon} />
            <Card.Body>
              <Card.Title className="color-primary text2 mb-2">
                Interior designing
              </Card.Title>
              <Card.Text className="text3 color-gray subTextStyle line-height-1">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="mb-3" md={4}>
          <Card>
            <Card.Img variant="top" src={vastuconsultantIcon} />
            <Card.Body>
              <Card.Title className="color-primary text2 mb-2">
                Vastu consultant
              </Card.Title>
              <Card.Text className="text3 color-gray subTextStyle line-height-1">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="mb-3" md={4}>
          <Card>
            <Card.Img variant="top" src={constructionIcon} />
            <Card.Body>
              <Card.Title className="color-primary text2 mb-2">
                Construction
              </Card.Title>
              <Card.Text className="text3 color-gray subTextStyle line-height-1">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="mb-3" md={4}>
          <Card>
            <Card.Img variant="top" src={realEstateIcon} />
            <Card.Body>
              <Card.Title className="color-primary text2 mb-2">
                Real Estate(Properties)
              </Card.Title>
              <Card.Text className="text3 color-gray subTextStyle line-height-1">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="mb-3" md={4}>
          <Card>
            <Card.Img variant="top" src={financeIcon} />
            <Card.Body>
              <Card.Title className="color-primary text2 mb-2">
                FINANCE
              </Card.Title>
              <Card.Text className="text3 color-gray subTextStyle  line-height-1" >
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <Col className="heading1 color-primary mt-2 mb-2 text-center">
        {" "}
        OUR PROJECT
      </Col> */}
    </div>
  );
};

export default Services;
