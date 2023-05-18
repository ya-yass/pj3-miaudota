import Box from '@mui/material/Box';
import CardPet from '../components/Card-pet'
import CarouselSlide from '../components/Carousel';
import Entenda from '../components/Entenda'
import CardPetResgate from '../components/CardPetResgate'
import './Content.css'

const Content = () => {

  return (
    <Box
      sx={{
        margin: '0 70px'
      }}>
      <CarouselSlide />
      <CardPet />
      <Entenda />
      <CardPetResgate />
    </Box>
  )
}

export default Content