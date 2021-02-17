import React from 'react';
import { Carousel, CarouselCaption, CarouselItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ImgCarousel = () => {
  const CarouselStyling = {
    // paddingTop: '13rem',
    width: '50%',
    margin: 'auto auto',
    minHeight: '65vh',
  };

  const CarouselText = {
    color: 'black',
    fontFamily: 'Oswald, sans-serif',
  };

  const ButtonStyling = {
    padding: '20px',
    background: '#292F33',
    color: 'white',
    borderRadius: '50%',
  };

  const AddPadding = {
    paddingTop: '7rem',
  };

  const SearchBarStyles = {
    width: '40rem',
    height: '3rem',
    borderRadius: '3rem',
    border: '1px solid gray',
    position: 'relative',
    fontFamily: 'Oswald, sans-serif',
    margin: '0 auto',
  };

  const ButtonStyles = {
    position: 'absolute',
    border: 'none',
    backgroundColor: 'white',
    borderRadius: '1rem',
    marginLeft: '450px',
  };

  const FormStyles = {
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div>
      <Carousel
        style={CarouselStyling}
        nextIcon={
          <span aria-hidden="true" className="carousel-control-next-icon" />
        }
      >
        <Carousel.Item>
          <img
            style={AddPadding}
            className="d-block w-100"
            src="/static/car-clipart-transparent-background-13.png"
            alt="Mazda-Atenza"
          />
          <Carousel.Caption style={CarouselText}>
            <h2>FIND A CAR</h2>
            <form style={FormStyles} action="mazda">
              <input style={SearchBarStyles}></input>

              <button style={ButtonStyles} type="submit">
                <img
                  src="/static/magnifying-glass.png"
                  width="20"
                  height="20"
                  alt="accident"
                />{' '}
              </button>
            </form>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            // height="313"
            className="d-block w-100"
            src="/static/undraw_towing_6yy4.png"
            alt="Second slide"
          />
          <Carousel.Caption style={CarouselText}>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            // height="313"
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
