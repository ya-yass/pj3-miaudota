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
            
            <a href={Home}><img src={logo} className='logo' alt='logo do MiauDota'/></a>
            <div>
                <Link to='/adocao'>
                    <button type="button" className="btn btn-info">Quero adotar</button>
                </Link>
            </div>

            <button type="button" class="btn btn-secundary">
                Achei um pet
            </button>

            <div>
                <User/>
            </div>
        </Box>
    )
    
}

export default Navbar