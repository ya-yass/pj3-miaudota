import Box from "@mui/material/Box"
import * as React from 'react';
import { useState } from "react";
import useAuthStore from '../../store/authStore'

//componentes materia ui
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

import logo from '../assets/img/miaudota-logo.png'

//files

// import './ModalUserLogin.css'
import '../Navbar.css'

import { BsXLg as Cancel } from 'react-icons/bs'





const ModalEditarperfil= ({user, setUsers, users}) => {

   //abrir e fechar o modal de cadastro
   const [modalOpen, setModalOpen] = React.useState(false);
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  
  const [fotoperfil, setFotoperfil] = useState(user.fotoperfil)
  const [nome, setNome] = useState(user.nome)
  const [usuario, setUsuario] = useState(user.usuario)
  const [email, setEmail] = useState(user.email)
  const [senha, setSenha] = useState(user.senha)
  const [idade, setIdade] = useState(user.idade)
  const [qtdanimais, setQtdanimais] = useState(user.qtdanimais)

  const token = useAuthStore((state) => state.token)
  
  const handleEdit = async (event) => {
    event.preventDefault()
    const id = parseInt(event.target.id.value)
    const nome = event.target.nome.value 
    const usuario = event.target.usuario.value
    const email = event.target.email.value
    const senha = event.target.senha.value
    const idade = event.target.idade.value
    const qtdanimais = event.target.qtdanimais.value

    const userEdited = {id, nome, usuario, email, senha, idade, qtdanimais}
    try {
      const response = await fetch('http://localhost:3100/user',
      {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json",
          "Authorization": token
        },
        body: JSON.stringify(userEdited), 
      })
      const data = await response.json()
      if(response.status === 200) {
      console.log(data)
      const newUsers = users.map((user) => {
        if(user.id === id) {
          return userEdited
        }
        return user
      })
      setUsers(newUsers)
      setModalOpen(false)
    } else {
      alert(data.message)
      console.log(data)
    }
    } catch (error) {
      console.log(error)
    }
  }


  return(
    <>
      <Box>

      <div className="sobre">
        <button className="btnEditarPerfil" onClick={handleOpen}>Editar</button>
      </div>

      <Modal
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">

        <Box sx={styles.Modal} className='selecionaTudo'>
          <Cancel className='botaoCancelModal' onClick={handleClose} />
          <Typography id="modal-modal-title">
            <img src={logo} className='logoModal' alt='MiauDota'></img>
          </Typography>
          <div>
            <h3 className='tituloModal'>Editar Perfil</h3>
          </div>
          <hr />

        <form onSubmit={handleEdit}>
          <Typography id="modal-modal-description"
            sx={{
              mt: 2,
              '& fieldset': {
                display: 'none',
              },
              '& legend': {
                display: 'none',
              }
            }}>

              <div className=' botãoFotoPerfil'>
                <div className='divTituloCampo'>
                  <label className='titulocampo'>Foto de Perfil</label>
                </div>
                <input type="hidden" name="id" value={user.id}/>
              </div>

              <TextField
                  name="fotoperfil"
                  value={fotoperfil}
                  onChange={e => setFotoperfil (e.target.value)}
                  type="text"
                  className='inputEditarPerfil'
                  InputLabelProps={{ shrink: true }}
                  sx={{
                    marginRight: '10px',
                  }}
                // onChange={handleFileChange}
                />

            <div className='editarNomeUser'>
              <div className="nomeUsuarioEditar">
                <div className='divTituloCampo'>
                  <label className='titulocampo'>Nome</label>
                </div>
                <TextField
                  name="nome"
                  value={nome}
                  onChange={e => setNome (e.target.value)}
                  type="text"
                  className='inputEditarPerfil'
                  InputLabelProps={{ shrink: true }}
                  sx={{
                    marginRight: '10px',
                  }}
                // onChange={handleFileChange}
                />
              </div>

              <div className="userUsuario">
                <div className='divTituloCampo'>
                  <label className='titulocampo'>Usuário</label>
                </div>
                <TextField
                  nome="usuario"
                  value={usuario}
                  onChange={e => setUsuario (e.target.value)}
                  type="text"
                  className='inputEditarPerfil'
                  InputLabelProps={{ shrink: true }}
                  sx={{
                    marginRight: '10px',
                    width: '100%',
                  }}
                // onChange={handleFileChange}
                />
              </div>

            </div>

            <div className="editarEmailUsuario">
              <div className='divTituloCampo'>
                <label className='titulocampo'>E-mail</label>
              </div>
              <TextField
                nome="email"
                value={email}
                onChange={e => setEmail (e.target.value)}
                
                type="text"
                className='inputEditarPerfil'
                InputLabelProps={{ shrink: true }}
                sx={{
                  width: '100%',
                }}
              // onChange={handleFileChange}
              />
            </div>

            <div className="editarSenhaUsuario">
              <div className='divTituloCampo'>
                <label className='titulocampo'>Senha</label>
              </div>
              <TextField
                nome="senha"
                value={senha}
                onChange={e => setSenha (e.target.value)}

                type="password"
                className='inputEditarPerfil'
                InputLabelProps={{ shrink: true }}
                sx={{
                  width: '100%',
                }}
              // onChange={handleFileChange}
              />
            </div>


            <div className='editarIdadeEAnimais'>

              <div className='IdadeUsuario'>
                <div className='divTituloCampo '>
                  <label className='titulocampo'>Idade</label>
                </div>
                <TextField
                  sx={{ marginTop: '-10px' }}
                  nome="idade"
                  value={idade}
                  onChange={e => setIdade (e.target.value)}

                  type="text"
                  id='idadeCampo'

                  InputLabelProps={{ shrink: true }}

                // onChange={handleFileChange}
                />
              </div>
              <div className='QtdAnimais'>
                <div className='divTituloCampo '>
                  <label className='titulocampo'>Quantos animais?</label>
                </div>
                <TextField
                  sx={{ marginTop: '-10px' }}
                  type="text"
                  id='qtdAnimaisCampo'
                  value={qtdanimais}
                  onChange={e => setQtdanimais (e.target.value)}


                  InputLabelProps={{ shrink: true }}

                // onChange={handleFileChange}
                />
              </div>

            </div>


            <div className='BotoesModal'>
              <button className='btnCadastrarAdocao' variant="contained" type="submit" >Editar</button>

              {/* <ButtonEnviar variant="contained" id='botaoEnviar' >Editar</ButtonEnviar> */}
              <p className='botãoCancelarEditar' onClick={handleClose} >Cancelar</p>
            </div>

          </Typography>
        </form>
        </Box>
      </Modal>

        </Box>
    </>
  
    )
    

  


   
}

const styles = {

  Button: {
    backgroundColor: '#F6823F',
    marginLeft: '15px',
    float: 'right',
    color: 'white',
    position: 'relative',
    width: '80px',
    height: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '20px',
    fontSize: '15px',
    border: 'none'
  },

  Modal: {

    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 673,
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    p: 4,
    borderRadius: '20px',
  }


}

export default ModalEditarperfil 