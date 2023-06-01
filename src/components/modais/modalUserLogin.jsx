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





const Modaluserlogin = () => {

  //abrir e fechar o modal principal
  const [open, setOpen] = React.useState(false);
  const openLogin = () => setOpen(true);
  const handleCloseLogin = () => setOpen(false);

  return(
    <>
    <Box>
      <div className="sobre">
        <button className="btnLoginUser" onClick={openLogin}>Login</button>
      </div>

      <Modal //modal login
        open={open}
        onClose={handleCloseLogin}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">

        <Box sx={styles.Modal}>
          <Cancel className='botaoCancelModal' onClick={handleCloseLogin} />

          <Typography id="modal-modal-title" component="div">
            <img src={logo} className='logoModal' alt='MiauDota'></img>
            <div>
              <h3 className='tituloModal'>Login</h3>
              <span className='informativo'>Não tem uma conta? Cadastre-se</span>
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
              <div className="loginEmailUser">
                <div className='divTituloCampo'>
                  <label className='titulocampo'>E-mail ou usuário</label>
                </div>
                <TextField
                  placeholder='Digite seu e-mail ou usuário'
                  type="text"
                  className='inputLogin'
                  InputLabelProps={{ shrink: true }}
                  sx={{
                    marginRight: '10px',
                  }}
                // onChange={handleFileChange}
                />
              </div>
            </div>

            <div className="loginSenha">
              <div className='divTituloCampo'>
                <label className='titulocampo'>Senha</label>
              </div>
              <TextField
                placeholder='Digite sua senha'
                type="text"
                className='inputLogin'
                InputLabelProps={{ shrink: true }}
                sx={{
                  width: '100%',
                }}
              />
            </div>

            <div className='BotoesModal'>
              <button className='btnLoginUsuario' variant="contained" >Login</button>

              <p className='btnCancelarLogin' onClick={handleCloseLogin} >Cancelar</p>
            </div>

          </Typography>
        </Box>

        {/* Modal Avatar */}
      </Modal>

    </Box>
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

export default Modaluserlogin