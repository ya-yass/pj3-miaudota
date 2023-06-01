import Box from "@mui/material/Box"
import * as React from 'react';
import { useState } from "react";


//componentes materia ui
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

import logo from '../assets/img/miaudota-logo.png'

//files

// import './ModalUserLogin.css'
import '../Navbar.css'

import { BsXLg as Cancel } from 'react-icons/bs'
import PerfilUsuario from "../PerfilUsuario";





const ModalUserCadastro = (user) => {

   //abrir e fechar o modal de cadastro
   const [users, setUsers] = useState(false);
   const [modalOpen, setModalOpen] = useState(false) 

 

   const handleSubmit = async (event) => {
    event.preventDefault()
    console.log('Minha funcao de submit')
    const nome = event.target.nome.value 
    const usuario = event.target.usuario.value
    const email = event.target.email.value
    const senha = event.target.senha.value
    const user = {nome, usuario, email, senha}
    try {
      const response = await fetch('http://localhost:3100/user',
      {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user), 
      })
      const data = await response.json()
      console.log(data)
      setModalOpen(false)
    } catch (error) {
      console.log(error)
    }
  }


  return(
    <>
      <Box>
        <div className="sobre">
          <button className="btnCadastroUser" onClick={setModalOpen}>Cadastrar</button>
          {users &&
            users.map(user => (
              <PerfilUsuario key={user.id} user={user} setUsers={setUsers} users={users}/>
            ))

          }
        </div>
      </Box>

        <Modal  //modal cadastrar-se
              open={modalOpen}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description">

              <Box sx={styles.Modal}>

                <Cancel className='botaoCancelModal' onClick={() => setModalOpen(false)} />

                

                <Typography id="modal-modal-title" component="div">
                  <img src={logo} className='logoModal' alt='MiauDota'></img>
                  <div>
                    <h3 className='tituloModal'>Cadastre-se</h3>
                    <span className='informativo'>Já tem uma conta? Faça seu login</span>
                  </div>
                </Typography>

                <hr />


                <Typography id="modal-modal-description" component="div"
                  sx={{
                    mt: 2,
                    '& fieldset': {
                      display: 'none',
                    },
                    '& legend': {
                      display: 'none',
                    }
                  }}>

                  <div className="camposTextosCadastro">
                    <div className="nomeCadastroUser">
                      <div className='divTituloCampo'>
                        <label className='titulocampo' name="nome">Nome</label>
                        <p className='obrigatorio'>*</p>
                      </div>
                      <TextField
                        placeholder='Digite o seu nome'
                        type="text"
                        className='inputCadastro'
                        InputLabelProps={{ shrink: true }}
                        sx={{
                          marginRight: '10px',
                        }}
                      // onChange={handleFileChange}
                      />
                    </div>

                    <div className="usuarioCadastroUser">
                      <div className='divTituloCampo'>
                        <label className='titulocampo' name="usuario">Usuário</label>
                        <p className='obrigatorio'>*</p>
                      </div>
                      <TextField
                        placeholder='Digite seu nome de usuário'
                        type="text"
                        className='inputCadastro'
                        InputLabelProps={{ shrink: true }}
                        sx={{
                          marginRight: '10px',
                        }}
                      // onChange={handleFileChange}
                      />
                    </div>

                    <div className="emailCadastroUser">
                      <div className='divTituloCampo'>
                        <label className='titulocampo'  name="email">E-mail</label>
                        <p className='obrigatorio'>*</p>
                      </div>
                      <TextField
                        placeholder='Digite um e-mail válido'
                        type="text"
                        className='inputCadastro'
                        InputLabelProps={{ shrink: true }}
                        sx={{
                          marginRight: '10px',
                        }}
                      // onChange={handleFileChange}
                      />
                    </div>

                    <div className="SenhaCadastroUser">
                      <div className='divTituloCampo'>
                        <label className='titulocampo' name="senha">Senha</label>
                        <p className='obrigatorio'>*</p>
                      </div>
                      <TextField
                        placeholder='Crie uma senha'
                        type="text"
                        className='inputCadastro'
                        InputLabelProps={{ shrink: true }}
                        sx={{
                          marginRight: '10px',
                        }}
                      // onChange={handleFileChange}
                      />
                    </div>

                  </div>

                  <div className='BotoesModal'>
                    <button className='btnCadastroUsuario' variant="contained" onSubmit={handleSubmit} type="submit">Cadastrar</button>

                    <p className='btnCancelarCadastro'  onClick={() => setModalOpen(false)} >Cancelar</p>
                  </div>

                </Typography>
              </Box>
              {/* Modal Avatar */}
          </Modal>

    
    </>
    
  )   
   
}

const styles = {

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

export default ModalUserCadastro 