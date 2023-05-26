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





const ModalUserCadastro = () => {

   //abrir e fechar o modal de cadastro
   const [open, setOpenSignUp] = React.useState(false);
   const handleCloseSignUp = () => setOpenSignUp(false);


  return(
    <>
      <Box>
      <div className="sobre">
        <button className="btnCadastroUser" onClick={setOpenSignUp}>Cadastrar</button>
      </div>
        <Modal //modal cadastrar-se
              open={open}
              onClose={handleCloseSignUp}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description">

              <Box sx={styles.Modal}>
                <Cancel className='botaoCancelModal' onClick={handleCloseSignUp} />

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
                        <label className='titulocampo'>Nome</label>
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
                        <label className='titulocampo'>Usuário</label>
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
                        <label className='titulocampo'>E-mail</label>
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
                        <label className='titulocampo'>Senha</label>
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
                    <button className='btnCadastroUsuario' variant="contained" >Cadastrar</button>

                    <p className='btnCancelarCadastro' onClick={handleCloseSignUp} >Cancelar</p>
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

export default ModalUserCadastro 