import Box from '@mui/material/Box';
import './SecaoResgate.css' //para importar jsx sempre é com letra maíuscula
import "react-multi-carousel/lib/styles.css";
import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './SecaoAdocao.css'
import CarouselSlide from "./CarouselMiaudota"
import CardResgate from './CardResgate';
import { useState, useEffect } from 'react';
import { API_SERVER } from '../config';

import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';



const SecaoResgate = () => {
  const[perdidos, setPerdidos] = useState(false)

  const loadPetsRegastados = async () => {
    try{
      const response = await fetch (`${API_SERVER}/perdido`)
      const data = await response.json()
      setPerdidos(data)
      console.log(data)
    }catch (error){
      console.log(error)
    }
  }

  useEffect(() => {
    loadPetsRegastados()
  },[]
  )


  return (
    <Box className='div' sx={{
      margin: '0 70px'
    }}>
      <CarouselSlide />
      <Stack direction="row" spacing={2} className='gatoCachorroBtn'>

        <button className='btnGato' >Gato</button>
        <button className='btnCachorro' >Cachorro</button>
      </Stack>

      <h1>Resgatados | resultado da busca</h1>

      <div className="conteudo">
       {perdidos &&
          perdidos.map(perdido => (
            <CardResgate key={perdido.id} perdido={perdido} setPerdidos={setPerdidos} perdidos={perdidos}/>

          ))

       }
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

          <div className="idade">
            <span className='labelName'>Idade</span>
            <div className="opcoes">
              <FormControlLabel control={<Checkbox />} label="Filhote" className='labelFilhote' />
              <FormControlLabel control={<Checkbox />} label="Adulto" className='labelAdulto' />
              <FormControlLabel control={<Checkbox />} label="Idoso" className='labelIdoso' />
            </div>
          </div>

          <div className="bairroPet">
            <div className='divTituloCampo'>
              <label className='titulocampo'>Bairro onde se perdeu</label>
              <p>*</p>
            </div>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              className='inputResgateBuscar'
              options={bairros}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Bairros" />}
            />
          </div>

          <div className="botaoos">
            <Button className='filtro'>FILTRAR</Button>
          </div>

        </div>
      </div>
    </Box>
  )
}

const bairros = [
  { label: 'Balneário California' },
  { label: 'Balneário Copacabana' },
  { label: 'Balneário Golfinhos' },
  { label: 'Balneário Forest' },
  { label: 'Balneário Recando do Sol' },
  { label: 'Barranco Alto' },
  { label: 'Benfica' },
  { label: 'Canta Galo' },
  { label: 'Capricónio' },
  { label: 'Caputera' },
  { label: 'Centro' },
  { label: 'Cidade Jardim' },
  { label: 'Costa Nova' },
  { label: 'Delfim Verde' },
  { label: "Estrela D'Alva" },
  { label: 'Getuba' },
  { label: 'Indaiá' },
  { label: 'Ipiranga' },
  { label: 'Itaúna' },
  { label: 'Jaraguá' },
  { label: 'Jaraguazinho' },
  { label: 'Jardim Aruan' },
  { label: 'Jardim Britânia' },
  { label: 'Jardim Califórnia' },
  { label: 'Jardim Capricórnio' },
  { label: 'Jardim Casa Branca' },
  { label: 'Jardim das Gaivotas' },
  { label: 'Jardim Jaqueira' },
  { label: 'Jardim Manari' },
  { label: 'Jardim Mariella' },
  { label: 'Jardim Maristela' },
  { label: 'Jardim Olaria' },
  { label: 'Jardim Primavera' },
  { label: 'Jardim Rio Santos' },
  { label: 'Jardim Santa Rosa' },
  { label: 'Jardim Tarumãs' },
  { label: 'Jardim Terralão' },
  { label: 'Mar Azul' },
  { label: 'Martim de Sá' },
  { label: 'Massaguaçu' },
  { label: 'Mirante da Orla' },
  { label: 'Morro do Algodão' },
  { label: 'Park Imperial' },
  { label: 'Parque Balneário Poiares' },
  { label: 'Pegorelli' },
  { label: 'Perequê Mirim' },
  { label: 'Poiares' },
  { label: 'Pontal de Santa Marina' },
  { label: 'Ponte Seca' },
  { label: 'Portal da Fazendinha' },
  { label: 'Porto Novo' },
  { label: 'Praia da Cocanha' },
  { label: 'Praia da Mococa' },
  { label: 'Praia das Palmeiras' },
  { label: 'Prainha' },
  { label: 'Recanto Som do Mar' },
  { label: 'Rio Claro' },
  { label: 'Rio do Ouro' },
  { label: 'Sumaré' },
  { label: 'Tabatinga' },
  { label: 'Tinga' },
  { label: 'Travessão' },
  { label: 'Vapapesca' },
  { label: 'Vila Nossa Senhora Aparecida' },
  { label: 'Vila Ponte Seca' },
];

export default SecaoResgate