import Box from '@mui/material/Box';
import ContentPerfilUsuario from '../components/ContentPerfilUsuario';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'


const PerfilUsuario = () => {
  return (
    <>
      <Navbar />
      <Box>
        <ContentPerfilUsuario />
      </Box>
      <Footer />
    </>
  )
}

export default PerfilUsuario