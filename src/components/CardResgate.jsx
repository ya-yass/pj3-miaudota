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

const CardResgate = ({perdido, setPerdidos, perdidos}) => {


  const [foto, setFoto] = useState(perdido.foto)
  const [idade, setIdade] = useState(perdido.idade)
  const [nome, setnome] = useState(perdido.nome)
  const [raca, setRaca] = useState(perdido.raca)
  const [sexo, setSexo] = useState(perdido.sexo)
	console.log(foto)

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
			<h1>Resgatados</h1>
			<Carousel
				className='carrossel'
				responsive={responsive}
				ssr={true} // means to render carousel on server-side.
			>
				<div className="card">
					<img src={perdido.foto} alt="pet" className='pet' />
					<div className="info">
						<div className="cardHeader">
							<h3 className="nome">{perdido.nome}</h3>
							<Femea className='femea' />
							{/* <Macho className='macho' /> */}
						</div>
						<div className="detalhes">
							<span className="idade"><Idade />{perdido.idade}</span>
							<span><Raca />{perdido.raca}</span>
							<span><Local />{perdido.bairo}</span>
						</div>
						<div className="sobre">
							< ModalDescricaoResgate />
						</div>
					</div>
				</div>

				

			</Carousel >
		</Box>
	)
}

export default CardResgate