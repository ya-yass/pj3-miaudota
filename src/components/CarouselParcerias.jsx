import Carousel from 'react-bootstrap/Carousel'
import slide1 from './assets/img/parceria-petz.png'
import slide2 from './assets/img/parceria-inoue.png'
import slide3 from './assets/img/parceria-petland.png'
import './Carousel.css'


//TODO react-bootstrap
function CarouselParcerias() {
  return (
    <Carousel>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100 imagemSlide"
          src={slide1}
          alt="Pet Shop Petz"
        />
      </Carousel.Item>

      <Carousel.Item interval={500}>
        <img
          className="d-block w-100 imagemSlide"
          src={slide2}
          alt="Clínica Veterinária Inoue"
        />

      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 imagemSlide"
          src={slide3}
          alt="Pet Shop Petland"
        />

      </Carousel.Item>

    </Carousel>
  );
}

export default CarouselParcerias;