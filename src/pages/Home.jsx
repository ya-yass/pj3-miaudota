import Box from '@mui/material/Box';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import CarouselSlide from '../components/CarouselMiaudota';
import CardPet from '../components/Card-pet';
import EntendaMiauDota from '../components/EntendaMiauDota';
import CardPetInicialResgate from '../components/CardPetInicialResgate';

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
        <CardPet />
        <EntendaMiauDota />
        <CardPetInicialResgate />
      </Box>
      <Footer />
    </>
  )
}

export default Home