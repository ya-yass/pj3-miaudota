import Box from '@mui/material/Box';
import EncontreiUmPet from './EncontreiUmPet'
import AnunciarAdocao from './AnunciarAdocao'
import './AnunciarAdocao.css'

const AnunciarPet = () => {
  return (
    <Box sx={{
      display: 'flex',
      margin: '120px 450px 120px 450px',
      justifyContent: 'space-evenly',
      borderRadius:'20px'
    }}>
      
        <AnunciarAdocao/>
        <EncontreiUmPet/>

    </Box>
  )
}

export default AnunciarPet