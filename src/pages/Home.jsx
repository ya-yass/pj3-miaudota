import Box from '@mui/material/Box'
import Navbar from '../components/Navbar'
import Content from '../components/Content'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Navbar />
      <Box sx={{
        display: 'flex',
        flexDirection: 'column'

      }}>
      <Content />
      <Carousel/>

      </Box>
      <Footer />
    </>
  )
}

export default Home