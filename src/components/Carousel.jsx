import Grid from '@mui/material/Grid'
import Slider from 'react-slick'
import "../components/Carousel.css"; 
import "../components/Carousel-theme.css";
import slide1 from './assets/img/slide1.png'


const Carousel = () => {
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />

      };
    
      function CustomNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={`${className} meu-next-arrow`}
            style={{ ...style, display: "block" }}
            onClick={onClick}
          />
        );
      }
    
      function CustomPrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={`${className} meu-prev-arrow`}
            style={{ ...style}}
            onClick={onClick}
          />
        );


      }
  return (

    <Grid display="flex" justifyContent="center" alignItems="center" position="relative" >
        
        <Slider {...settings} >
            <div>
                <img
                src={slide1}
                style={{maxWidth:"1860px", minWidth:"600px", position: "absolute"}}
                >

                </img>
            </div>
            <div>
            <img
                src={slide1}
                style={{maxWidth:"1860px", minWidth:"600px",  position: "absolute"}}
                >

                </img>
            </div>
            <div>
            <img
                src={slide1}
                style={{maxWidth:"1860px", minWidth:"600px",  position: "absolute"}}
                >

                </img>
            </div>
        </Slider>

    </Grid>
  )
}

export default Carousel