import Box from '@mui/material/Box';
import Foto from './assets/img/pet1.jpg';
import './CardPetPerfil.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import {
	FaVenus as Femea,
	// FaMars as Macho,
	FaHeart as Idade,
	FaSyringe as Vacina,
	FaPaw as Raca,
	FaClinicMedical as Castrado
} from 'react-icons/fa'

const CardPetPerfil = () => {
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
		<Box sx={{ marginTop: '50px' }}>
			<h1>Pets divulgados</h1>
			<Carousel
				responsive={responsive}
				ssr={true} // means to render carousel on server-side.
			>
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

			</Carousel >
		</Box>
	)
}

export default CardPetPerfil