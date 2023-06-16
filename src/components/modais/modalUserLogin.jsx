import Box from "@mui/material/Box"
import * as React from 'react';

//componentes materia ui
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

import logo from '../assets/img/miaudota-logo.png'

//files
import useAuthStore from '../../store/authStore'
import ModalUserCadastro from "./ModalUserCadastro";
import DropDownPerfil from '../DropDownPerfil'


// import './ModalUserLogin.css'
import '../Navbar.css'

import { BsXLg as Cancel } from 'react-icons/bs' 





const ModalUserlogin = () => {


  //abrir e fechar o modal principal
  const [modalOpen, setOpen] = React.useState(false);
  const openLogin = () => setOpen(true);
  const handleCloseLogin = () => setOpen(false);



  const isLogged = useAuthStore((state) => state.isLogged)
  const login = useAuthStore((state) => state.login)

  const handleSubmit = async (event) => {
    event.preventDefault() 
    const email = event.target.email.value
    const senha = event.target.senha.value
    const user = {email, senha}
    try {
      const response = await fetch('http://localhost:3100/auth/login',
      {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user), 
      })
      const data = await response.json()
      
      console.log(data)
      if(response.status === 200) {
        //logar
        login(data.token, data.user)
        localStorage.setItem('token', data.token)
        localStorage.setItem('user', JSON.stringify(data.user))
        setOpen(false)
      } else{
        alert(data.message)
      }
      
    } catch (error) {
      console.log(error)
    }
  }


 

  return(
    <>
    <Box>
      <div className="sobre">
      {isLogged ? (
        <DropDownPerfil />

        ) : (<button onClick={openLogin} >Logar</button> )
      }

    {isLogged ? (
        console.log("loguei")
        ) : (<ModalUserCadastro/> )
      }
      </div>
    

      <Modal //modal login
        open={modalOpen}
        onClose={handleCloseLogin}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">

        <Box sx={styles.Modal}>
          <Cancel className='botaoCancelModal' onClick={handleCloseLogin} />

        <form onSubmit={handleSubmit}>
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
                  <label className='titulocampo'>E-mail</label>
                </div>
                <TextField
                  name="email"
                  placeholder='Digite seu e-mail'
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
                name="senha"
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
              <button className='btnLoginUsuario' variant="contained" type="submit" >Login</button>

              <p className='btnCancelarLogin' onClick={handleCloseLogin} >Cancelar</p>
            </div>

          </Typography>
        </form>
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

export default ModalUserlogin