import Box from '@mui/material/Box';
import { useState } from 'react';
//Modal
import * as React from 'react';

//componentes e files
import CardPetPerfil from '../components/CardPetPerfil'
import './PerfilUsuario.css'
import ModalEditarperfil from './modais/ModalEditarPerfil';
//imagens e icones
import capaexemplo from './assets/img/capaexemplo.png'
import { FaPaw as Raca } from 'react-icons/fa'


const PerfilUsuario = ({user}) => {

  const [nome] = useState(user.nome)
  const [usuario] = useState(user.usuario)
  const [fotoperfil] = useState(user.fotoperfil)
  const [qtdanimais] = useState(user.qtdanimais)

  return (
    <Box sx={{
      margin: '0px',
    }}>
      <img src={capaexemplo} className='capa' alt='Foto de capa'></img>

      <div className='informacaoUsuario'>
        <img src={user.fotoperfil} className='fotoperfil' alt='Foto de perfil'></img>
        <div className='infoNameUserIcon'>
          <div className='editarENome'>

            <h2 className='nomeusuario'>{user.nome}</h2>
            <ModalEditarperfil/>
          </div>

          <div className='userAndPet'>
            <p>{user.usuario}</p>
            <div className='iconPet'>
              <Raca />
              <p>{user.qtdanimais}</p>
            </div>
          </div>
        </div>
      </div>

     

      <CardPetPerfil />

    </Box>
  )
}


export default PerfilUsuario