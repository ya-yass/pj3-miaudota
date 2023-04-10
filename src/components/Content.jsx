import Box from '@mui/material/Box';
import CardPet from '../components/Card-pet'
import Carousel from '../components/Carousel';


const Content = () => {

  return (
    <Box sx={{
      margin: '0 70px',
    }}>
      <Carousel />
      <CardPet />
    </Box>
  )
}

export default Content