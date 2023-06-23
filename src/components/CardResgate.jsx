import Box from '@mui/material/Box';
import './CardPetInicialResgate.css' //para importar jsx sempre é com letra maíuscula
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ModalDescricaoResgate from "./modais/ModalDescricaoResgate"

import { useState } from 'react';

import {
	FaVenus as Femea,
	// FaMars as Macho,
	FaHeart as Idade,
	FaMapMarkerAlt as Local, //https://react-icons.github.io/react-icons/icons?name=fa
	FaPaw as Raca,
} from 'react-icons/fa'



const bairroTratado ={
  0:['shdsa'],
  1:['2'],
  2:['3'],
  3:['4']
  
}


const CardResgate = ({perdido, setPerdidos, perdidos}) => {


  const [foto, setFoto] = useState(perdido.foto)
  const [idade, setIdade] = useState(perdido.idade)
  const [nome, setnome] = useState(perdido.nome)
  const [raca, setRaca] = useState(perdido.raca)
  const [sexo, setSexo] = useState(perdido.sexo)
  const [bairro, setBairro] = useState(perdido.bairro)

	const responsive = { //para editar a responsividade do carousel
		desktop: {
			breakpoint: { max: 2500, min: 1501 },
			items: 5,
			slidesToSlide: 3
		},
		tablet: { 
			breakpoint: { max: 1500, min: 1101 },
			items: 4,
			slidesToSlide: 3
		},
		tablet2: {
			breakpoint: { max: 1100, min: 801 },
			items: 3,
			slidesToSlide: 3
		},
		mobile: {
			breakpoint: { max: 800, min: 0 },
			items: 2,
			slidesToSlide: 2
		}
	};



	return (
		<Box className='div'>
			<div className="card">
				<img src={foto} alt="pet" className='pet' />
				<div className="info">
					<div className="cardHeader">
						<h3 className="nome">{nome}</h3>
						<Femea className='femea' />
						{/* <Macho className='macho' /> */}
					</div>
					<div className="detalhes">
						<span className="idade"><Idade />{idade}</span>
						<span><Raca />{raca}</span>
						<span><Local />{bairroTratado[bairro]}</span>
					</div>
					<div className="sobre">
						< ModalDescricaoResgate />
					</div>
				</div>
			</div>
		</Box>
	)
}

export default CardResgate