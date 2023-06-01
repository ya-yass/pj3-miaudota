import Box from "@mui/material/Box"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ModalUserCadastro from "../components/modais/ModalUserCadastro"
import SecaoResgate from "../components/SecaoResgate"

const Resgatados = () => {
  return (
    <>
      <Box>
        < Navbar />
        <SecaoResgate />
        <ModalUserCadastro/>

        <Footer></Footer>
      </Box>
    </>
  )
}

export default Resgatados