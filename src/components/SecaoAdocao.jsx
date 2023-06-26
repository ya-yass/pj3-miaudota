import Box from '@mui/material/Box';
import './CardAdocao.css' //para importar jsx sempre é com letra maíuscula
import "react-multi-carousel/lib/styles.css";
import * as React from 'react';

import './SecaoAdocao.css'
import { useState, useEffect } from 'react';
import CarouselSlide from "./CarouselMiaudota"
import { API_SERVER } from '../config';
import CardAdocao from './CardAdocao'




const SecaoAdocao = () => {

  const[adocoes, setAdocoes] = useState(false)

  const loadPetsAdocoes = async () => {
    try{
      const response = await fetch (`${API_SERVER}/adocao`)
      const data = await response.json()
      setAdocoes(data)
      console.log(data)
    }catch (error){
      console.log(error)
    }
  }

  useEffect(() => {
    loadPetsAdocoes()
  },[]
  )
  
  return (
    <Box className='div' sx={{
      margin: '0 70px'
    }}>
      <CarouselSlide />

      <h1>Adoção</h1>

      <div className="conteudo">

      {adocoes &&
          adocoes.map(adocao => (
            <CardAdocao key={adocao.id} adocao={adocao} setAdocoes={setAdocoes} adocoes={adocoes}/>

          ))

       }
       
      </div>

    </Box>
  )
}

export default SecaoAdocao