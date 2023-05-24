import Box from '@mui/material/Box';
import AnunciarResgate from './AnunciarResgate'
import AnunciarAdocao from './AnunciarAdocao'
import './AnunciarAdocao.css'

const SecaoAnunciarPet = () => {
  return (
    <Box sx={{
      display: 'flex',
      margin: '120px 450px 120px 450px',
      justifyContent: 'space-evenly',
      borderRadius: '20px'
    }}>

      <AnunciarAdocao />
      <AnunciarResgate />

    </Box>
  )
}

export default SecaoAnunciarPet