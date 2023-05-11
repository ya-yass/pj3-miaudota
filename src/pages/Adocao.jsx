import Box from "@mui/material/Box"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import SecaoAdocao from "../components/SecaoAdocao"

const Adocao = () => {
  return (
    <>
      <Box >
        < Navbar />
        <SecaoAdocao />
        <Footer></Footer>
      </Box>
    </>
  )
}

export default Adocao