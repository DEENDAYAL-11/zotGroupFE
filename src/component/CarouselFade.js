import React from "react";
import Carousel from "react-bootstrap/Carousel";
export const CarouselFade = () => {
  return (
    <section className="carouselSection">
      <Carousel fade>
        <Carousel.Item>
          <div className="slide1"></div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="slide2"></div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="slide3"></div>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};
