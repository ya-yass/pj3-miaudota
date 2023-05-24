import Box from '@mui/material/Box'
import './EntendaMiauDota.css'
import Encontre from './assets/img/encontre.png'
import Processo from './assets/img/processo.png'
import Perdi from './assets/img/perdi.png'
import Parcerias from './assets/img/parcerias.png'

const EntendaMiauDota = () => {
  return (
    <Box>
      <div className="container">
        <h2 id='titulo'>EntendaMiauDota mais sobre o miaudota</h2>
        <div className="topicos">
          <div className="topico encontre">
            <img src={Encontre} alt="Encontre seu pet" className='imgEncontre imagem' />
            <h4 id='subtitulo'>Encontre seu pet</h4>
            <span id='texto'>Somos uma plataforma com animais de toda a cidade que estão precisando de um novo dono!</span>
          </div>
          <div className="topico processo">
            <img src={Processo} alt="Processo de adoção" className='imgProcesso imagem' />
            <h4 id='subtitulo'>Processo de adoção</h4>
            <span id='texto'>Nosso processo de adoção é simples e prático! Você entra em contato direto com o dono do pet em adoção.</span>
          </div>
          <div className="topico perdi">
            <img src={Perdi} alt="Perdi meu pet, e agora?" className='imgPerdi imagem' />
            <h4 id='subtitulo'>Perdi meu pet, e agora</h4>
            <span id='texto'>O MiauDota te ajuda a encontrar! Temos uma seção no site com anúncios de animais perdidos</span>
          </div>
          <div className="topico parcerias">
            <img src={Parcerias} alt="Parcerias" className='imgParcerias imagem' />
            <h4 id='subtitulo'>Parcerias</h4>
            <span id='texto'>Temos parceriar com instituições e pet shops de toda a cidade e região.</span>
          </div>
        </div>
      </div>
    </Box>
  )
}

export default EntendaMiauDota