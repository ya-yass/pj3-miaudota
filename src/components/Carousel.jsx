import Grid from '@mui/material/Grid'
import Slider from 'react-slick'
import "../components/Carousel.css"; 
import "../components/Carousel-theme.css";
import slide1 from './assets/img/slide1.png'
//TODO npm i react-slick   


const Carousel = () => {
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1
      }
  return (

    <Grid display="flex" justifyContent="center" alignItems="center" >
        
        <Slider {...settings} >
            <div>
                <img
                src={slide1}
                style={{width: '100%', height:'300px'}}
                >

                </img>
            </div>
            <div>
                <h3>Slide 2</h3>
            </div>
            <div>
                <h3>Slide 3</h3>
            </div>
        </Slider>

    </Grid>
  )
}

export default Carousel