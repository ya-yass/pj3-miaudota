import Box from '@mui/material/Box';
import Navbar from '../components/Navbar';
import Content from '../components/Content';
import Footer from '../components/Footer'

//TODO npm i react-slick
//TODO npm install react-multi-carousel --save


const Home = () => {
  return (
    <>
      <Navbar />
      <Box>
        <Content />

      </Box>
      <Footer />
    </>
  )
}

export default Home