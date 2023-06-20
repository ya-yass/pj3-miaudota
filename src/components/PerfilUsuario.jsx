import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
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
// import { FaTrash as IconTrash } from 'react-icons/fa';


const PerfilUsuario = () => {

  const [setUsers] = useState(false)

  const loadUsers = async () => {
    try {
      const response = await fetch('http://localhost:3100/user')
      const data = await response.json()
      setUsers(data)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    loadUsers()

  })



  // const id =useAuthStore((state) => state.id)
  const fotoperfil =useAuthStore((state) => state.fotoperfil)
  const nome =useAuthStore((state) => state.nome)
  const usuario =useAuthStore((state) => state.usuario)
  const qtdanimais =useAuthStore((state) => state.qtdanimais)
  // const roles = useAuthStore((state) => state.roles)
  // const emailLogged = useAuthStore((state) => state.email)
  // const token = useAuthStore((state) => state.token)
  // const isLogged = useAuthStore((state) => state.isLogged)


  // const deleteUser = async (id) => {
  //   try {
  //     const response = await fetch('http://localhost:3100/user/' + id,
  //       {
  //         method: 'DELETE',
  //         headers: {
  //           "Content-Type": "application/json",
  //           "Authorization": token
  //         }
  //       })
  //     const data = await response.json()
  //     console.log(data)
  //     const newUsers = users.filter((useAuthStoreuser) => useAuthStore.id !== id)
  //     setUsers(newUsers) 
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }


  return (
    <>
      {/* {isLogged && (roles.includes('admin') || emailLogged === email) &&
        (<IconTrash style={{ width: '15px', height: '15px', position: 'absolute', top: '20px', right: '20px', padding: '10px', cursor: 'pointer' }}
          onClick={() => deleteUser(user.id)}
        />)} */}

      <Box sx={{
        margin: '0px',
      }}>
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



        <CardPetPerfil />

      </Box>
    </>
  )
}


export default PerfilUsuario