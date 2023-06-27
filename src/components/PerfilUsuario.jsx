import Box from '@mui/material/Box';
//Modal
import * as React from 'react';

//componentes e files
import CardPetPerfil from '../components/CardPetPerfil'
import './PerfilUsuario.css'
import ModalEditarperfil from './modais/ModalEditarPerfil';
import useAuthStore from '../store/authStore'

//imagens e icones
import capaexemplo from './assets/img/capaexemplo.png'
import { FaPaw as Raca } from 'react-icons/fa'

const PerfilUsuario = () => {
  const fotoperfil =useAuthStore((state) => state.fotoperfil)
  const nome =useAuthStore((state) => state.nome)
  const usuario =useAuthStore((state) => state.usuario)
  const qtdanimais =useAuthStore((state) => state.qtdanimais)
  return (
    <>
      <Box sx={{margin: '0px',}}>
        <img src={capaexemplo} className='capa' alt='Foto de capa'></img>
        <div className='informacaoUsuario'>
          <img src={fotoperfil} className='fotoperfil' alt='Foto de perfil'></img>
          <div className='infoNameUserIcon'>
            <div className='editarENome'>
              <h2 className='nomeusuario'>{nome}</h2>
              <ModalEditarperfil />
            </div>
            <div className='userAndPet'>
              <p>{usuario}</p>
              <div className='iconPet'>
                <Raca />
                <p>{qtdanimais}</p>
              </div>
            </div>
          </div>
        </div>

        <CardPetPerfil/>
      </Box>
    </>
  )
}

export default PerfilUsuario