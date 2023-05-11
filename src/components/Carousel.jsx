import Carousel from 'react-bootstrap/Carousel'
import slide1 from './assets/img/slide1.png'
import slide2 from './assets/img/slide2.png'

//TODO react-bootstrap
function CarouselSlide() {
  return (
    <Carousel>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={slide1}
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={slide2}
          alt="Second slide"
        />

      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide1}
          alt="Third slide"
        />

      </Carousel.Item>

    </Carousel>
  );
}

export default CarouselSlide;