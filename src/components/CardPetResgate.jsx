import Box from '@mui/material/Box';
import Fera from './assets/img/fera.avif';
import './CardPetResgate.css' //para importar jsx sempre é com letra maíuscula
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import {
	FaVenus as Femea,
	// FaMars as Macho,
	FaHeart as Idade,
  FaMapMarkerAlt as Local, //https://react-icons.github.io/react-icons/icons?name=fa
	FaPaw as Raca,
} from 'react-icons/fa'

const CardPetResgate = () => {
	const responsive = { //para editar a responsividade do carousel
		desktop: {
			breakpoint: { max: 2500, min: 1700 },
			items: 6,
			slidesToSlide: 2
		},
		tablet: {
			breakpoint: { max: 1699, min: 1450 },
			items: 5,
			slidesToSlide: 2
		},
		mobile: {
			breakpoint: { max: 1449, min: 0 },
			items: 4,
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
							<button className='btnSobrePet'>SOBRE O PET</button>
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
							<button className='btnSobrePet'>SOBRE O PET</button>
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
							<button className='btnSobrePet'>SOBRE O PET</button>
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
							<button className='btnSobrePet'>SOBRE O PET</button>
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
							<button className='btnSobrePet'>SOBRE O PET</button>
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
							<button className='btnSobrePet'>SOBRE O PET</button>
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
							<button className='btnSobrePet'>SOBRE O PET</button>
						</div>
					</div>
				</div>

			</Carousel >
		</Box>
	)
}

export default CardPetResgate