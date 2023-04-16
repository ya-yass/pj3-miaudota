import Box from '@mui/material/Box';
import ContentPerfil from '../components/ContentPerfil';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'


const PerfilUsuario = () => {
  return (
    <>
      <Navbar />
      <Box sx={{
        display: 'flex',
        flexDirection: 'column'

      }}>
        <ContentPerfil />


      </Box>
      <Footer />
    </>
  )
}

export default PerfilUsuario