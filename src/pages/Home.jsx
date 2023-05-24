import Box from '@mui/material/Box';
import Navbar from '../components/Navbar';
import ContentHome from '../components/ContentHome';
import Footer from '../components/Footer'

//TODO npm i react-slick
//TODO npm install react-multi-carousel --save


const Home = () => {
  return (
    <>
      <Navbar />
      <Box>
        <ContentHome />

      </Box>
      <Footer />
    </>
  )
}

export default Home