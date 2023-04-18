import './Navbar.css'
import Box from '@mui/material/Box'
import logo from './assets/img/miaudota-logotipo.png'
import { Link } from 'react-router-dom'
// import { FaUserAlt as User } from 'react-icons/fa'
import Home from '../pages/Home'

import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';


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
		<Box component='navbar'>

			<a href={Home}>
				<img src={logo} id='logo1' alt='logo do MiauDota' />
			</a>

			<div id="botoes">
				<Link to='/adocao'>
					<button id='botao adotar'>Quero adotar</button>
				</Link>
				<button id='botao achei'>Achei um pet</button>
			</div>



			<Box sx={{ flexGrow: 0 }} component='icon'>
				<Tooltip title="Open settings">
					<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
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



		</Box>
	);
}
export default Navbar;