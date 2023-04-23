import Box from '@mui/material/Box';
import AdocaoFoto from './assets/img/adocao-foto1.jpg'




const AnunciaraAdocao = () => {
  return (
    <Box>
        <div className='cards'>

          <button className="btnAdocao">
            <div className='mask'></div>
            <p>Colocar um pet para adoção</p>
            <img src={AdocaoFoto} alt="Anuncie um animal para adoção" className='imagemPet imagemPetEncontrado' />
          </button>
        </div>

    </Box>
  )
}

export default AnunciaraAdocao

