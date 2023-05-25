import './Navbar.css'
import Box from '@mui/material/Box'
import logo from './assets/img/miaudota-logo.png'
// import { FaUserAlt as User } from 'react-icons/fa'
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
// import ButtonEnviar from '@mui/material/Button';
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom'
import { BsXLg as Cancel } from 'react-icons/bs'


const settings = ['Entre', 'Cadastre-se'];


const Navbar = () => {

  //abrir e fechar o modal de login
  const [openLogin, setOpenLogin] = React.useState(false);
  const handleOpenLogin = () => setOpenLogin(true);
  const handleCloseLogin = () => setOpenLogin(false);


  //abrir e fechar o modal de cadastro
  const [open, setOpenSignUp] = React.useState(false);
  const handleOpenSignUp = () => setOpenSignUp(true);
  const handleCloseSignUp = () => setOpenSignUp(false);

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  return (
    <Box component='nav'>

      <div className="sec1">
        <Link to="/">
          <img src={logo} id='logo1' alt='logo do MiauDota' />
        </Link>

        <div className="links">
          <Link to="/" className='pgInicial link' >Página inicial</Link>
          {/* <a href='*' className='encontrePet'>Encontre seu pet</a> */}
          <Link to="/resgatados" className='resgatados link'>Resgatados</Link>
          <Link to="/adocao" className='adocao link'>Adoção</Link>
          <Link to="/cadastrar-pet" className='cadastroPet link'>Cadastrar um pet</Link>
        </div>
      </div>

      <div id="botoes">
        <button className='btnLogin' onClick={handleOpenLogin}>Login</button>
        {/* <button className='botao' id='cadastrarPet'>Cadastrar um pet</button> */}
        <button className='btnCadastrarSe' onClick={handleOpenSignUp} >Cadastrar-se</button>
        {/* <button className='botao' id='adotar'>Quero adotar</button> */}

        {/* Modal Cadastrar-se */}

        <Modal //modal login
          open={openLogin}
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
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </div>



    </Box >
  );
}
const styles = {

  Modal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 420,
    bgcolor: 'background.paper',
    border: 'none',
    // boxShadow: 24,
    p: 4,
    borderRadius: '20px',
  }
}

export default Navbar;