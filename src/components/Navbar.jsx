import './Navbar.css'
import Box from '@mui/material/Box'
import logo from './assets/img/miaudota-logo.png'

import * as React from 'react';


import { Link } from 'react-router-dom'
import ModalUserCadastro from './modais/ModalUserCadastro';
import ModalUserLogin from './modais/modalUserLogin'


const settings = ['Entre', 'Cadastre-se'];


const Navbar = () => {


 




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

         <ModalUserLogin/>
         <ModalUserCadastro/>
        

       
      </div>



    </Box >
  );
}

export default Navbar;