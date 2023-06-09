import Box from '@mui/material/Box';
import './CardAdocao.css' //para importar jsx sempre é com letra maíuscula
import "react-multi-carousel/lib/styles.css";
import * as React from 'react';

import './SecaoAdocao.css'
import { useState, useEffect } from 'react';
import { API_SERVER } from '../config';
import CardAdocao from './CardAdocao'
import banner1 from './assets/img/banner1.png'




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
        <img
          className="d-block w-100"
          src={banner1}
          alt="First slide"
        />
      <h1 className='tituloSecoes'>Adoção</h1>
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