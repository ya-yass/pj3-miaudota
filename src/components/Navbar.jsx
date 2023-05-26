import './Navbar.css'
import Box from '@mui/material/Box'
import logo from './assets/img/miaudota-logo.png'

import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom'

import Modaluserlogin from './modais/modalUserLogin';
import ModalUserCadastro from './modais/ModalUserCadastro';


const settings = ['Entre', 'Cadastre-se'];


const Navbar = () => {


 

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
        <Modaluserlogin/>
        <ModalUserCadastro/>


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

export default Navbar;