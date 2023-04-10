import Box from '@mui/material/Box'
import './Footer.css'
import logo from './assets/img/logo-imp.avif'

const Footer = () => {
  return (
    <Box className="footer">
      <div className="infoFooter">
        <img src={logo} className='logo' alt='logo do MiauDota' />
        <div className="endereco">
          <span>Av. Bahia, 1739 - Indaiá, Caraguatatuba - SP, 11665-071</span>
          <span>miaudota@gmail.com.br</span>
          <span>(00) 0 0000-0000 | (00) 0 0000-0000</span>
        </div>

        <div className="integrante">
          <span>Anita Cristina, email@domain.com</span>
          <span>Fernanda Sayuri Kano, email@domain.com</span>
          <span>Maria Eduarda Fabris, email@domain.com</span>
          <span>Yasmim Ramos Lopes, email@domain.com</span>
        </div>
      </div>
      <span className='copyright'>Copyright © 2023</span>
    </Box>
  )
}

export default Footer