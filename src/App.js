import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderSection from "./component/headerSection";
import { CarouselFade } from "./component/CarouselFade";
import SubHeader from "./component/SubHeader";
import { Container } from "react-bootstrap";
import Services from "./component/Services";
import ContactUs from "./component/Contact";

function App() {
  return (
    <>
      <HeaderSection />
      <SubHeader />
      <CarouselFade />
      <section className="mb-5">
        <Container>
          <Services/>
        </Container>
        <ContactUs/>
      </section>
    </>
  );
}

export default App;
