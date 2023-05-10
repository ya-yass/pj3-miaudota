import Box from "@mui/material/Box"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import CarouselSlide from "../components/Carousel"
import SecaoAdocao from "../components/SecaoAdocao"

const Adocao = () => {
  return (
    <>
      <Box>
        < Navbar />
        <CarouselSlide />
        <SecaoAdocao />
        <Footer></Footer>
      </Box>
    </>
  )
}

export default Adocao