import Box from "@mui/material/Box"
import * as React from 'react';
import { useState } from "react";
import useAuthStore from '../../store/authStore'

//componentes materia ui
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';


//files
import logo from '../assets/img/miaudota-logo.png'
import { API_SERVER } from "../../config";


// import './ModalUserLogin.css'
import '../Navbar.css'
import './ModalEditarPerfil.css'
import { BsXLg as Cancel } from 'react-icons/bs'





const ModalEditarperfil= () => {

   //abrir e fechar o modal de cadastro
   const [modalOpen, setModalOpen] = React.useState(false);

  const fotoperfil =useAuthStore((state) => state.fotoperfil)
  const nome =useAuthStore((state) => state.nome)
  const email =useAuthStore((state) => state.email)
  const idade =useAuthStore((state) => state.idade)
  const qtdanimais =useAuthStore((state) => state.qtdanimais)
  const usuario =useAuthStore((state) => state.usuario)

  const  [nomeInput, setNomeInput ] = useState("")
  const  [fotoperfilInput, setFotoperfilInput ] = useState("")
  const  [emailInput, setEmailInput ] = useState("")
  const  [idadeInput, setIdadeInput ] = useState("")
  const  [qtdanimaisInput, setQtdanimaisInput ] = useState("")
  const  [usuarioInput, setUsuarioInput ] = useState("")


   const handleOpen = () => {

    setNomeInput(nome)
    setFotoperfilInput(fotoperfil)
    setEmailInput(email)
    setIdadeInput(idade)
    setQtdanimaisInput(qtdanimais);
    setUsuarioInput(usuario);

    setModalOpen(true);
  }
  const handleClose = () => setModalOpen(false);

  const token = useAuthStore((state) => state.token)
  
  const handleEdit = async (event) => {
    event.preventDefault()
    const nome = event.target.nome.value 
    const usuario = event.target.usuario.value
    const email = event.target.email.value
    const idade = event.target.idade.value
    const fotoperfil = event.target.fotoperfil.value
    const qtdanimais = event.target.qtdanimais.value

    const userEdited = {nome, usuario, email,  idade, fotoperfil, qtdanimais}
    console.log(userEdited)
    try {
      const response = await fetch(`${API_SERVER}/user`,
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
      <Box component='div'>

      <button className="btnEditarPerfil" onClick={handleOpen}>Editar</button>

      <Modal
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">

        <Box sx={styles.Modal} className='selecionaTudo' component='div'>
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
              </div>

              <TextField
                  name="fotoperfil"
                  value={fotoperfilInput}
                  onChange={e => setFotoperfilInput(e.target.value)}
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
                  <label className='titulocampo'>Nomee</label>
                </div>
                <TextField
                  name="nome"
                  value={nomeInput}
                  onChange={e => setNomeInput(e.target.value)}
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
                  name="usuario"
                  value={usuarioInput}
                  onChange={e => setUsuarioInput(e.target.value)}
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
                name="email"
                value={emailInput}
                onChange={e => setEmailInput(e.target.value)}
                
                type="text"
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
                  name="idade"
                  value={idadeInput}
                  onChange={e => setIdadeInput(e.target.value)}

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
                  name="qtdanimais"
                  id='qtdAnimaisCampo'
                  value={qtdanimaisInput}
                  onChange={e => setQtdanimaisInput(e.target.value)}


                  InputLabelProps={{ shrink: true }}

                // onChange={handleFileChange}
                />
              </div>

            </div>


            <div className='BotoesModal'>
              <button className='btnCadastrarAdocao' variant="contained" type="submit" >Editar</button>

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
