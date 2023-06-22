import Box from '@mui/material/Box';
import CardPet from './CardAdocao'
import CarouselSlide from './CarouselMiaudota';
import EntendaMiauDota from './EntendaMiauDota'
import CardPetInicialResgate from './CardPetInicialResgate'
import './ContentHome.css'

const ContentHome = () => {

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

export default ContentHome