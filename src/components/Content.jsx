import Box from '@mui/material/Box';
import CardPet from '../components/Card-pet'
import CarouselSlide from './CarouselMiaudota';
import EntendaMiauDota from '../components/EntendaMiauDota'
import CardPetInicialResgate from '../components/CardPetInicialResgate'
import './Content.css'

const Content = () => {

  return (
    <Box
      sx={{
        margin: '0 70px'
      }}>
      <CarouselSlide />
      <CardPet />
      <EntendaMiauDota />
      <CardPetInicialResgate />
    </Box>
  )
}

export default Content