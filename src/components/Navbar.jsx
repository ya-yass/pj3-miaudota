import './Navbar.css'
import Box from '@mui/material/Box'
import logo from './assets/img/miaudota-logotipo.png'
// import { FaUserAlt as User } from 'react-icons/fa'
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import ButtonEnviar from '@mui/material/Button';
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom'
import { BsXLg as Cancel } from 'react-icons/bs'
import { useState } from 'react'


const settings = ['Entre', 'Cadastre-se'];


const Navbar = () => {
  const login = useAuthStore((state) => state.login)
	//abrir e fechar o modal
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

  const [modalOpen, setModalOpen] = useState(false)

  const handleSubmit = async (event) => {
        event.preventDefault() 

        const email = event.target.email.value
        const pass = event.target.pass.value
        const user = {email, pass}
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
            setModalOpen(false)
          } else{
            alert(data.message)
          }
          
        } catch (error) {
          console.log(error)
        }
      }


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
				<button style={styles.Button} onClick={handleSubmit} >Login</button>
					{/* <button className='botao' id='cadastrarPet'>Cadastrar um pet</button> */}
				<button style={styles.Button} onClick={handleOpen} >Cadastrar-se</button>
					{/* <button className='botao' id='adotar'>Quero adotar</button> */}
			
				{/* Modal Cadastrar-se */}
			</div>

				<Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">

        <Box sx={styles.Modal}>
          <Cancel className='botaoCancelModal' onClick={handleClose} />
          <Typography id="modal-modal-title" component="div">
            <img src={logo} className='logoModal' alt='Logo do Modal'></img>
            <div>
              <h3>CADASTRE-SE</h3>
              <p>Já tem uma conta? Faça seu login</p>
            </div>
          </Typography>

          
					<div className='divTituloCampo tituloCampoNome'>
              <label className='titulocampoNome'>Nome</label>
              <p>*</p>
            </div>
            <TextField
              sx={{ borderRadius: '20px', height: '40px', width: '200px', marginBottom: '15px' }}
              placeholder='Digite seu nome'
              type="text"
              className='input'
              InputLabelProps={{ shrink: true }}

            // onChange={handleFileChange}
            />

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

            <div className='divTituloCampo tituloCampoNome'>
              <label className='titulocampoNome'>Usuário</label>
              <p>*</p>
            </div>
            <TextField
              sx={{ borderRadius: '20px', height: '40px', width: '200px', marginBottom: '15px' }}
              placeholder='Digite seu usuário'
              type="text"
              className='input'
              InputLabelProps={{ shrink: true }}

            // onChange={handleFileChange}
            />

            <div className='divTituloCampo'>
              <label className='titulocampo'>E-mail</label>
              <p>*</p>
            </div>
            <TextField
              sx={{ marginTop: '15px' }}
              placeholder='Digite um e-mail válido'
              type="text"
              className='input'

              InputLabelProps={{ shrink: true }}

            // onChange={handleFileChange}
            />
            <div className='divTituloCampo'>
              <label className='titulocampo'>Senha</label>
              <p>*</p>
            </div>
            <TextField
              sx={{ marginTop: '-10px' }}
              placeholder='Crie uma senha'
              type="text"
              className='input'

              InputLabelProps={{ shrink: true }}

            // onChange={handleFileChange}
            />

            <div className='Botoesmodal'>
              <ButtonEnviar variant="contained" id='botaoEnviar' >Cadastrar</ButtonEnviar>
              <p className='botãoCancelarEditar' onClick={handleClose} >Cancelar</p>
            </div>

          </Typography>
        </Box>

        {modalOpen && 
              <Box className="bgModal" onClick={(event) => {
                if(event.target.className.includes('bgModal')) {
                  setModalOpen(false)
                }
              }} sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: '#000000A0',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 9
                }}>
                  <Box sx={{
                    width: '500px',
                    height: '300px',
                    background: '#FFF',
                    borderRadius: '10px',
                    padding: '20px',
                  }}>
                    <h1>Logar</h1>
                    <form onSubmit={handleSubmit}>
                      <input type="text" name="email" placeholder="Email" /><br />
                      <input type="password" name="pass" placeholder="Senha" /><br />
                      <br />
                      <button type="submit">Logar</button>
                    </form>
                  </Box> 
              </Box>
            }


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
		</Box >
	);
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

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   pt: 2,
//   px: 4,
//   pb: 3,
// };
export default Navbar;