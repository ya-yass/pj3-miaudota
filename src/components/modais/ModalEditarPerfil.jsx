import Box from "@mui/material/Box"
import * as React from 'react';

//componentes materia ui
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

import logo from '../assets/img/miaudota-logo.png'

//files

// import './ModalUserLogin.css'
import '../Navbar.css'

import { BsXLg as Cancel } from 'react-icons/bs'





const ModalEditarperfil= () => {

   //abrir e fechar o modal de cadastro
   const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return(
    <>
      <Box>

      <div className="sobre">
        <button className="btnEditarPerfil" onClick={handleOpen}>Editar</button>
      </div>

      <Modal
        open={open}
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

            <div className='BtnImagens'>
              <div className=' botãoFotoPerfil'>
                <div className='divTituloCampo'>
                  <label className='titulocampo'>Foto de Perfil</label>
                </div>
                <label className='tituloFile'>Adicionar foto</label>
                <input type="file" />
              </div>

              <div className='botãoCapaPerfil'>
                <div className='divTituloCampo'>
                  <label className='titulocampo'>Foto de capa</label>
                </div>
                <label className='tituloFile'>Adicionar foto</label>
                <input type="file" />
              </div>
            </div>

            <div className='editarNomeUser'>
              <div className="nomeUsuarioEditar">
                <div className='divTituloCampo'>
                  <label className='titulocampo'>Nome</label>
                </div>
                <TextField
                  placeholder='Nome e sobrenome'
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
                  placeholder='@user123'
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
                placeholder='email@domain.com'
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
                placeholder='******'
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
                  placeholder='Ex 23'
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
                  placeholder='03'
                  type="text"
                  id='qtdAnimaisCampo'

                  InputLabelProps={{ shrink: true }}

                // onChange={handleFileChange}
                />
              </div>

            </div>


            <div className='BotoesModal'>
              <button className='btnCadastrarAdocao' variant="contained" >Cadastrar</button>

              {/* <ButtonEnviar variant="contained" id='botaoEnviar' >Editar</ButtonEnviar> */}
              <p className='botãoCancelarEditar' onClick={handleClose} >Cancelar</p>
            </div>

          </Typography>
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