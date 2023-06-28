import Box from '@mui/material/Box';
import './SecaoResgate.css' //para importar jsx sempre é com letra maíuscula
import "react-multi-carousel/lib/styles.css";
import * as React from 'react';
import './SecaoAdocao.css'
// import CarouselSlide from "./CarouselMiaudota"
import CardResgate from './CardResgate';
import { useState, useEffect } from 'react';
import { API_SERVER } from '../config';
import banner2 from './assets/img/banner2.png'




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
      <img
          className="d-block w-100"
          src={banner2}
          alt="First slide"
        />

      <h1 className='tituloSecoes'>Resgatados</h1>

      <div className="conteudo">
       {perdidos &&
          perdidos.map(perdido => (
            <CardResgate key={perdido.id} perdido={perdido} setPerdidos={setPerdidos} perdidos={perdidos}/>

          ))

       }
     </div>
    </Box>
  )
}


export default SecaoResgate