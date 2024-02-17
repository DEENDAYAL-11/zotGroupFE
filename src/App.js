import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderSection from "./component/headerSection";
import { CarouselFade } from "./component/CarouselFade";
import SubHeader from "./component/SubHeader";
import { Container } from "react-bootstrap";
import Services from "./component/Services";
import ContactUs from "./component/Contact";
import { Col } from "react-bootstrap";

function App() {
  return (
    <>
      <HeaderSection />
      <SubHeader />
      <CarouselFade />
      <section>
        <Container>
          <Services />
        </Container>
        <ContactUs />
        <footer className="footer">
          <Container>
            <Col className="mb-2 footerText">©2024. Zot Group. All Rights Reserved.</Col>
          </Container>
        </footer>
      </section>
    </>
  );
}

export default App;
