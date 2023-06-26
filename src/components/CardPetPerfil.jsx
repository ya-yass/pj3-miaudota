import Box from '@mui/material/Box';
import Foto from './assets/img/pet1.jpg';
import './CardPetPerfil.css'
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

	return (
		<Box sx={{ marginTop: '50px' }} className='div'>
			<h1>Cadastrados recentemente</h1>
		
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
				

		</Box>
	)
}

export default CardPetPerfil