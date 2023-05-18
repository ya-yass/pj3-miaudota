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


const settings = ['Entre', 'Cadastre-se'];


const Navbar = () => {
	//abrir e fechar o modal
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

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
				<button style={styles.Button} >Login</button>
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