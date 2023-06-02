import Box from '@mui/material/Box';
import { useState } from 'react';
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
import { FaTrash as IconTrash } from 'react-icons/fa';


const PerfilUsuario = ({ user, users, setUsers }) => {


  const [fotoperfil] = useState(user.fotoperfil)
  const [nome] = useState(user.nome)
  const [usuario] = useState(user.usuario)
  const [email] = useState(user.email)
  const [senha] = useState(user.senha)
  const [idade] = useState(user.idade)
  const [qtdanimais] = useState(user.qtdanimais)

  const roles = useAuthStore((state) => state.roles)
  const emailLogged = useAuthStore((state) => state.email)
  const token = useAuthStore((state) => state.token)
  const isLogged = useAuthStore((state) => state.isLogged)


  const deleteUser = async (id) => {
    try {
      const response = await fetch('http://localhost:3100/user/' + id,
        {
          method: 'DELETE',
          headers: {
            "Content-Type": "application/json",
            "Authorization": token
          }
        })
      const data = await response.json()
      console.log(data)
      const newUsers = users.filter((user) => user.id !== id)
      setUsers(newUsers)
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <>


      {isLogged && (roles.includes('admin') || emailLogged === user.email) &&
        (<IconTrash style={{ width: '15px', height: '15px', position: 'absolute', top: '20px', right: '20px', padding: '10px', cursor: 'pointer' }}
          onClick={() => deleteUser(user.id)}
        />)}
     

      <Box sx={{
        margin: '0px',
      }}>
        <img src={capaexemplo} className='capa' alt='Foto de capa'></img>

        <div className='informacaoUsuario'>
          <img src={user.fotoperfil} className='fotoperfil' alt='Foto de perfil'></img>
          <div className='infoNameUserIcon'>
            <div className='editarENome'>

              <h2 className='nomeusuario'>{user.nome}</h2>
              <ModalEditarperfil />
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
    </>
  )
}


export default PerfilUsuario