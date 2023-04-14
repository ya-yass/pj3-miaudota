import Box from '@mui/material/Box';
import CardPet from '../components/Card-pet'
import CarouselSlide from '../components/Carousel';


const Content = () => {

  return (
    <Box sx={{
      margin: '0 70px',
    }}>
      <CarouselSlide />
      <CardPet />
    </Box>
  )
}

export default Content