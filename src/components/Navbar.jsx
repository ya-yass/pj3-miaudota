import './Navbar.css'
import Box from '@mui/material/Box'
import logo from './assets/img/miaudota-logo.png'
import {Link} from 'react-router-dom'
import { FaUserAlt as User } from 'react-icons/fa'
import Home from '../pages/Home'

//TODO perguntar para o prof sobre a rota da logo retornar para Home

const Navbar = () => {

	return (
		<Box component='navbar'>
				
			<a href={Home}>
				<img src={logo} className='logo1' alt='logo do MiauDota'/>
			</a>

			<div className="botoes">
				<Link to='/adocao'>
					<button className='botao adotar'>Quero adotar</button>
				</Link>
				<button className='botao achei'>Achei um pet</button> 
				<div>
					<User/>
				</div>
			</div>
		</Box>
	)
    
}

export default Navbar