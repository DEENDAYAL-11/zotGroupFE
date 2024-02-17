import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderSection from "./component/headerSection";
import { CarouselFade } from "./component/CarouselFade";

function App() {
  return (
    <>
      <HeaderSection />
      <CarouselFade/>
    </>
  );
}

export default App;
