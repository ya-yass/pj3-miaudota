import Box from '@mui/material/Box';
//Modal
import * as React from 'react';
//formulário
// import ButtonEnviar from '@mui/material/Button';

//componentes e files
import CardPetPerfil from '../components/CardPetPerfil'
import './PerfilUsuario.css'
import ModalEditarperfil from './modais/ModalEditarPerfil';
//imagens e icones
import capaexemplo from './assets/img/capaexemplo.png'
import fotoperfil from './assets/img/fotoperfil.png'
import { FaPaw as Raca } from 'react-icons/fa'


const PerfilUsuario = () => {

  return (
    <Box sx={{
      margin: '0px',
    }}>
      <img src={capaexemplo} className='capa' alt='Foto de capa'></img>

      <div className='informacaoUsuario'>
        <img src={fotoperfil} className='fotoperfil' alt='Foto de perfil'></img>
        <div className='infoNameUserIcon'>
          <div className='editarENome'>

            <h2 className='nomeusuario'>Maria Fabris</h2>
            <ModalEditarperfil/>
          </div>

          <div className='userAndPet'>
            <p>@mariafabris</p>
            <div className='iconPet'>
              <Raca />
              <p>1</p>
            </div>
          </div>
        </div>
      </div>

     

      <CardPetPerfil />

    </Box>
  )
}


export default PerfilUsuario