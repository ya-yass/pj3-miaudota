import Box from '@mui/material/Box';
import './CardAdocao.css' //para importar jsx sempre é com letra maíuscula
import "react-multi-carousel/lib/styles.css";
import ModalDescricaoAdocao from "./modais/ModalDescricaoAdocao"
import { useState } from 'react';

import {
	FaVenus as Femea,
	FaMars as Macho,
	FaHeart as Idade,
	FaPaw as Raca,
	FaClinicMedical as Castrado
} from 'react-icons/fa'

const CardAdocao = ({adocao}) => {

	console.log()
	return (
		<Box className='div'>

				<div className="card">
					<img src={adocao.foto} alt="pet" className='pet' />
					<div className="info">
						<div className="cardHeader">
							<h3 className="nome">{adocao.nome}</h3>

							{adocao.sexo === 'femea' ? (
          			<Femea/>
          			) : (<Macho/> )
       			  }


      
						</div>
						<div className="detalhes">
							<span className="idade"><Idade />{adocao.idade}</span>
							<span><Raca />{adocao.raca}</span>
							<span><Castrado />
							{adocao.castrado === 'nao' ? (
          			'Não castrado'
          			) : ('Castrado' )
       			  }</span>
						</div>
						<div className="sobre">
							< ModalDescricaoAdocao data={adocao} />
						</div>
					</div>
				</div>
		

		</Box>
	)
}

export default CardAdocao