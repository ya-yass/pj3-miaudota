import Box from '@mui/material/Box';
import AdocaoFoto from './assets/img/adocao-foto.jpg'
import './AnunciarPet.css'

const AnunciarPet = () => {
  return (
    <Box>
      <div className='cards'>
        <button className="btnAdocao">
          <img src={AdocaoFoto} alt="Anuncie um animal para adoção" className='imagemPet' />
        </button>

        <button className="btnEncontrei">
          <img src={AdocaoFoto} alt="Anuncie um animal para adoção" className='imagemPet' />
        </button>
      </div>

    </Box>
  )
}

export default AnunciarPet