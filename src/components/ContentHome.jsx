import Box from '@mui/material/Box';
import CardPet from './CardAdocao'
import CarouselSlide from './CarouselMiaudota';
import EntendaMiauDota from './EntendaMiauDota'
import CardPetInicialResgate from './CardPetInicialResgate'
// import CardPetInicialAdocao from './CardPetInicialAdocao'
import './ContentHome.css'

const ContentHome = () => {

  return (
    <Box
      sx={{
        margin: '0 70px'
      }}>
      <CarouselSlide />
      {/* <CardPetInicialAdocao /> */}
      <EntendaMiauDota />
      <CardPetInicialResgate />
    </Box>
  )
}

export default ContentHome