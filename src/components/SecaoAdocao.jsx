import Box from '@mui/material/Box';
import Foto from './assets/img/pet1.jpg';
import './Card-pet.css' //para importar jsx sempre é com letra maíuscula
import "react-multi-carousel/lib/styles.css";
import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './SecaoAdocao.css'
import CarouselSlide from "../components/Carousel"


import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';


import {
  FaVenus as Femea,
  // FaMars as Macho,
  FaHeart as Idade,
  FaSyringe as Vacina,
  FaPaw as Raca,
  FaClinicMedical as Castrado
} from 'react-icons/fa'

const CardPet = () => {
  return (
    <Box className='div' sx={{
      margin: '0 70px'
    }}>
      <CarouselSlide />
      <Stack direction="row" spacing={2} className='gatoCachorroBtn'>
        <Button variant="contained" className='btnGato'>Gato</Button>
        <Button className='btnCachorro'>Cachorro</Button>
      </Stack>

      <h1>Adoção | resultado da busca</h1>

      <div className="conteudo">
        <div className="pets">
          <div className="card">
            <img src={Foto} alt="pet" className='pet' />
            <div className="info">
              <div className="cardHeader">
                <h3 className="nome">Nana</h3>
                <Femea className='femea' />
                {/* <Macho className='macho' /> */}
              </div>
              <div className="detalhes">
                <span className="idade"><Idade />03 meses</span>
                <span className="vacinas"><Vacina />V3, V4, V5 e Raiva</span>
                <span><Raca />Sem raça definida</span>
                <span><Castrado />Castrado</span>
              </div>
              <div className="sobre">
                <button className='btnSobrePet'>SOBRE O PET</button>
              </div>
            </div>
          </div>

          <div className="card">
            <img src={Foto} alt="pet" className='pet' />
            <div className="info">
              <div className="cardHeader">
                <h3 className="nome">Nana</h3>
                <Femea className='femea' />
                {/* <Macho className='macho' /> */}
              </div>
              <div className="detalhes">
                <span className="idade"><Idade />03 meses</span>
                <span className="vacinas"><Vacina />V3, V4, V5 e Raiva</span>
                <span><Raca />Sem raça definida</span>
                <span><Castrado />Castrado</span>
              </div>
              <div className="sobre">
                <button className='btnSobrePet'>SOBRE O PET</button>
              </div>
            </div>
          </div>

          <div className="card">
            <img src={Foto} alt="pet" className='pet' />
            <div className="info">
              <div className="cardHeader">
                <h3 className="nome">Nana</h3>
                <Femea className='femea' />
                {/* <Macho className='macho' /> */}
              </div>
              <div className="detalhes">
                <span className="idade"><Idade />03 meses</span>
                <span className="vacinas"><Vacina />V3, V4, V5 e Raiva</span>
                <span><Raca />Sem raça definida</span>
                <span><Castrado />Castrado</span>
              </div>
              <div className="sobre">
                <button className='btnSobrePet'>SOBRE O PET</button>
              </div>
            </div>
          </div>

          <div className="card">
            <img src={Foto} alt="pet" className='pet' />
            <div className="info">
              <div className="cardHeader">
                <h3 className="nome">Nana</h3>
                <Femea className='femea' />
                {/* <Macho className='macho' /> */}
              </div>
              <div className="detalhes">
                <span className="idade"><Idade />03 meses</span>
                <span className="vacinas"><Vacina />V3, V4, V5 e Raiva</span>
                <span><Raca />Sem raça definida</span>
                <span><Castrado />Castrado</span>
              </div>
              <div className="sobre">
                <button className='btnSobrePet'>SOBRE O PET</button>
              </div>
            </div>
          </div>

          <div className="card">
            <img src={Foto} alt="pet" className='pet' />
            <div className="info">
              <div className="cardHeader">
                <h3 className="nome">Nana</h3>
                <Femea className='femea' />
                {/* <Macho className='macho' /> */}
              </div>
              <div className="detalhes">
                <span className="idade"><Idade />03 meses</span>
                <span className="vacinas"><Vacina />V3, V4, V5 e Raiva</span>
                <span><Raca />Sem raça definida</span>
                <span><Castrado />Castrado</span>
              </div>
              <div className="sobre">
                <button className='btnSobrePet'>SOBRE O PET</button>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={Foto} alt="pet" className='pet' />
            <div className="info">
              <div className="cardHeader">
                <h3 className="nome">Nana</h3>
                <Femea className='femea' />
                {/* <Macho className='macho' /> */}
              </div>
              <div className="detalhes">
                <span className="idade"><Idade />03 meses</span>
                <span className="vacinas"><Vacina />V3, V4, V5 e Raiva</span>
                <span><Raca />Sem raça definida</span>
                <span><Castrado />Castrado</span>
              </div>
              <div className="sobre">
                <button className='btnSobrePet'>SOBRE O PET</button>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={Foto} alt="pet" className='pet' />
            <div className="info">
              <div className="cardHeader">
                <h3 className="nome">Nana</h3>
                <Femea className='femea' />
                {/* <Macho className='macho' /> */}
              </div>
              <div className="detalhes">
                <span className="idade"><Idade />03 meses</span>
                <span className="vacinas"><Vacina />V3, V4, V5 e Raiva</span>
                <span><Raca />Sem raça definida</span>
                <span><Castrado />Castrado</span>
              </div>
              <div className="sobre">
                <button className='btnSobrePet'>SOBRE O PET</button>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={Foto} alt="pet" className='pet' />
            <div className="info">
              <div className="cardHeader">
                <h3 className="nome">Nana</h3>
                <Femea className='femea' />
                {/* <Macho className='macho' /> */}
              </div>
              <div className="detalhes">
                <span className="idade"><Idade />03 meses</span>
                <span className="vacinas"><Vacina />V3, V4, V5 e Raiva</span>
                <span><Raca />Sem raça definida</span>
                <span><Castrado />Castrado</span>
              </div>
              <div className="sobre">
                <button className='btnSobrePet'>SOBRE O PET</button>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={Foto} alt="pet" className='pet' />
            <div className="info">
              <div className="cardHeader">
                <h3 className="nome">Nana</h3>
                <Femea className='femea' />
                {/* <Macho className='macho' /> */}
              </div>
              <div className="detalhes">
                <span className="idade"><Idade />03 meses</span>
                <span className="vacinas"><Vacina />V3, V4, V5 e Raiva</span>
                <span><Raca />Sem raça definida</span>
                <span><Castrado />Castrado</span>
              </div>
              <div className="sobre">
                <button className='btnSobrePet'>SOBRE O PET</button>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={Foto} alt="pet" className='pet' />
            <div className="info">
              <div className="cardHeader">
                <h3 className="nome">Nana</h3>
                <Femea className='femea' />
                {/* <Macho className='macho' /> */}
              </div>
              <div className="detalhes">
                <span className="idade"><Idade />03 meses</span>
                <span className="vacinas"><Vacina />V3, V4, V5 e Raiva</span>
                <span><Raca />Sem raça definida</span>
                <span><Castrado />Castrado</span>
              </div>
              <div className="sobre">
                <button className='btnSobrePet'>SOBRE O PET</button>
              </div>
            </div>
          </div>
        </div>

        <div className="busca">
          <h2 className='tituloBusca'>BUSCA</h2>
          <div className="sexo">
            <span className='labelName'>Sexo</span>
            <div className="opcoes">
              <FormControlLabel control={<Checkbox />} label="Fêmea" className='labelFemea' />
              <FormControlLabel control={<Checkbox />} label="Macho" className='labelMacho' />
            </div>
          </div>

          <div className="porte">
            <span className='labelName'>Porte</span>
            <div className="opcoes">
              <FormControlLabel control={<Checkbox />} label="Pequeno" className='labelPequeno' />
              <FormControlLabel control={<Checkbox />} label="Médio" className='labelMedio' />
              <FormControlLabel control={<Checkbox />} label="Grande" className='labelGrande' />
            </div>
          </div>

          <div className="porte">
            <span className='labelName'>Idade</span>
            <div className="opcoes">
              <FormControlLabel control={<Checkbox />} label="Filhote" className='labelFilhote' />
              <FormControlLabel control={<Checkbox />} label="Adulto" className='labelAdulto' />
              <FormControlLabel control={<Checkbox />} label="Idoso" className='labelIdoso' />
            </div>
          </div>

          <div className="porte">
            <span className='labelName'>Saúde</span>
            <div className="opcoes">
              <FormControlLabel control={<Checkbox />} label="Castrado" className='labelCastrado' />
              <FormControlLabel control={<Checkbox />} label="Vermifugado" className='labelVermifugado' />
              <FormControlLabel control={<Checkbox />} label="Vacinado" className='labelVacinado' />
            </div>
          </div>

          <div className="botaoos">
            <Button className='filtro'>FILTRAR</Button>
          </div>

        </div>
      </div>

    </Box>
  )
}

export default CardPet