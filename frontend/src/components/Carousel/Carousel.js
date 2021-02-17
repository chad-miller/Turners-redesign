import React from 'react';
import { Carousel, CarouselCaption, CarouselItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'components/Carousel/Carousel.css'

const ImgCarousel = () => {
  const CarouselStyling = {
    paddingTop: '13rem',
    width: '50%',
    margin: '0 auto',
  };

  const CarouselText = {
    color: 'black',
  };

  const ButtonStyling = {
    padding: '20px',
    background: '#292F33',
    color: 'white',
    borderRadius: '50%',
  };

  const AddPadding = {
    paddingTop: '30px',
  };
  return (
    <div>
      <Carousel style={CarouselStyling} nextIcon={<span aria-hidden="true" className="carousel-control-next-icon"/>}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/static/car-clipart-transparent-background-13.png"
            alt="Mazda-Atenza"
          />
          <Carousel.Caption style={CarouselText}>
            <form action='mazda'>
              <button style={ButtonStyling} type="submit">BUY NOW</button>
            </form>
            <h2>MAZDA ATENZA FOR SALE</h2>
            <p>12V BATTERY | 6 SPEEDS | ADJUSTABLE SEATS | LED LIGHTS </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/static/undraw_towing_6yy4.png"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/static/undraw_printing_invoices_5r4r.png"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ImgCarousel;
