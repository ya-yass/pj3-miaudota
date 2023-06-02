import Box from "@mui/material/Box"
import * as React from 'react';

//componentes materia ui
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';

import logo from '../assets/img/miaudota-logo.png'

//files
import useAuthStore from '../../store/authStore'


// import './ModalUserLogin.css'
import '../Navbar.css'

import { BsXLg as Cancel } from 'react-icons/bs'





const ModalUserlogin = () => {

  
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  //abrir e fechar o modal principal
  const [modalOpen, setOpen] = React.useState(false);
  const openLogin = () => setOpen(true);
  const handleCloseLogin = () => setOpen(false);



  const isLogged = useAuthStore((state) => state.isLogged)
  const fotoperfilUserLogged = useAuthStore((state) => state.fotoperfil)
  const nomeUserLogged = useAuthStore((state) => state.nome)
  const emailUserLogged = useAuthStore((state) => state.email)
  const tokenUserLogged = useAuthStore((state) => state.token)
  const login = useAuthStore((state) => state.login)
  const logout = useAuthStore((state) => state.logout)

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


  const handleLogout = async () => {
    try {
      const response = await fetch('http://localhost:3100/auth/logout',
      {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email: emailUserLogged, token: tokenUserLogged}), 
      })
      const data = await response.json()
      console.log(data)
      if(response.status === 200) {
        logout()
        localStorage.removeItem('token')
        localStorage.removeItem('user')
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
        <img onClick={() => handleLogout()} src={fotoperfilUserLogged} alt={nomeUserLogged} />
        ) : (<button onClick={openLogin} >Logar</button>) }
      </div>
      <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu}
              className='avatar'
              sx={{
                p: 0,
              }}>
              <Avatar src="/broken-image.jpg" />
            </IconButton>
          </Tooltip>
        </Box>

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