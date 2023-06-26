import Box from '@mui/material/Box';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import CarouselParcerias from '../components/CarouselParcerias'
import CarouselSlide from '../components/CarouselMiaudota';
import EntendaMiauDota from '../components/EntendaMiauDota';
import CardPetInicialResgate from '../components/CardPetInicialResgate';
import CardPetInicialAdocao from '../components/CardPetInicialAdocao';

//TODO npm i react-slick
//TODO npm install react-multi-carousel --save


const Home = () => {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          margin: '0 70px'
        }}>
        <CarouselSlide />
        <CardPetInicialAdocao/>
        <EntendaMiauDota />
        <CardPetInicialResgate />
        <CarouselParcerias/>
      </Box>
      <Footer />
    </>
  )
}

export default Home