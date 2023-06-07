import * as React from 'react';
import { useState } from 'react';

import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';

// import Foto from './assets/img/pet1.jpg';
import useAuthStore from '../store/authStore';




 const DropDownPerfil = (user) =>  {


  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [fotoperfil] = useState(user.fotoperfil)



  const emailUserLogged = useAuthStore((state) => state.email)
  const tokenUserLogged = useAuthStore((state) => state.token)
  const logout = useAuthStore((state) => state.logout)

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

  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}><img src={fotoperfil} alt='fotoPerfil'></img></Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <Link to="/user"><Avatar /> Ver perfil</Link>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <p onClick={() => handleLogout()}>Logout</p>
          </ListItemIcon>
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}

export default(DropDownPerfil)