import Box from '@mui/material/Box';
import Fera from './assets/img/fera.avif';
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

const CardPetInicialResgate = (petRegastado) => {


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
					<img src={petRegastado.foto} alt="pet" className='pet' />
					<div className="info">
						<div className="cardHeader">
							<h3 className="nome">{petRegastado.nome}</h3>
							<Femea className='femea' />
							{/* <Macho className='macho' /> */}
						</div>
						<div className="detalhes">
							<span className="idade"><Idade />{petRegastado.idade}</span>
							<span><Raca />{petRegastado.raca}</span>
							<span><Local />{petRegastado.bairo}</span>
						</div>
						<div className="sobre">
							< ModalDescricaoResgate />
						</div>
					</div>
				</div>

				<div className="card">
					<img src={Fera} alt="pet" className='pet' />
					<div className="info">
						<div className="cardHeader">
							<h3 className="nome">Fera</h3>
							<Femea className='femea' />
							{/* <Macho className='macho' /> */}
						</div>
						<div className="detalhes">
							<span className="idade"><Idade />Não informado</span>
							<span><Raca />Pittbull</span>
							<span><Local />Martim de Sá</span>
						</div>
						<div className="sobre">
							< ModalDescricaoResgate />
						</div>
					</div>
				</div>

				<div className="card">
					<img src={Fera} alt="pet" className='pet' />
					<div className="info">
						<div className="cardHeader">
							<h3 className="nome">Fera</h3>
							<Femea className='femea' />
							{/* <Macho className='macho' /> */}
						</div>
						<div className="detalhes">
							<span className="idade"><Idade />Não informado</span>
							<span><Raca />Pittbull</span>
							<span><Local />Martim de Sá</span>
						</div>
						<div className="sobre">
							< ModalDescricaoResgate />
						</div>
					</div>
				</div>

				<div className="card">
					<img src={Fera} alt="pet" className='pet' />
					<div className="info">
						<div className="cardHeader">
							<h3 className="nome">Fera</h3>
							<Femea className='femea' />
							{/* <Macho className='macho' /> */}
						</div>
						<div className="detalhes">
							<span className="idade"><Idade />Não informado</span>
							<span><Raca />Pittbull</span>
							<span><Local />Martim de Sá</span>
						</div>
						<div className="sobre">
							< ModalDescricaoResgate />
						</div>
					</div>
				</div>

				<div className="card">
					<img src={Fera} alt="pet" className='pet' />
					<div className="info">
						<div className="cardHeader">
							<h3 className="nome">Fera</h3>
							<Femea className='femea' />
							{/* <Macho className='macho' /> */}
						</div>
						<div className="detalhes">
							<span className="idade"><Idade />Não informado</span>
							<span><Raca />Pittbull</span>
							<span><Local />Martim de Sá</span>
						</div>
						<div className="sobre">
							< ModalDescricaoResgate />
						</div>
					</div>
				</div>

				<div className="card">
					<img src={Fera} alt="pet" className='pet' />
					<div className="info">
						<div className="cardHeader">
							<h3 className="nome">Fera</h3>
							<Femea className='femea' />
							{/* <Macho className='macho' /> */}
						</div>
						<div className="detalhes">
							<span className="idade"><Idade />Não informado</span>
							<span><Raca />Pittbull</span>
							<span><Local />Martim de Sá</span>
						</div>
						<div className="sobre">
							< ModalDescricaoResgate />
						</div>
					</div>
				</div>

				<div className="card">
					<img src={Fera} alt="pet" className='pet' />
					<div className="info">
						<div className="cardHeader">
							<h3 className="nome">Fera</h3>
							<Femea className='femea' />
							{/* <Macho className='macho' /> */}
						</div>
						<div className="detalhes">
							<span className="idade"><Idade />Não informado</span>
							<span><Raca />Pittbull</span>
							<span><Local />Martim de Sá</span>
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

export default CardPetInicialResgate