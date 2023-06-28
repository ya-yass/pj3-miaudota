import Box from '@mui/material/Box';
import './CardPetPerfil.css'
import "react-multi-carousel/lib/styles.css";
import ModalPerfilAdocaoNana from './modelo_modal/ModalPerfilAdocaoNana'
import ModalPerfilAdocaoTrix from './modelo_modal/ModalPerfilAdocaoTrix'
import ModalPerfilAdocaoPorsche from './modelo_modal/ModalPerfilAdocaoPorsche'
import ModalPerfilResgateSeuJorge from "./modelo_modal/ModalPerfilResgateSeuJorge"
import ModalPerfilResgateTigrinho from './modelo_modal/ModalPerfilResgateTigrinho'
import ModalPerfilResgateFelicia from './modelo_modal/ModalPerfilResgateFelicia'



import {
	FaVenus as Femea,
	FaMars as Macho,
	FaHeart as Idade,
	FaPaw as Raca,
	FaClinicMedical as Castrado
} from 'react-icons/fa'

const CardPetPerfil = () => {

	return (
		<Box sx={{ marginTop: '50px' }} className='div'>
      <h1>Cadastrados recentemente</h1>
			<div className="conteudo" >
				<div className="card">
					<img src="https://images.unsplash.com/photo-1447684808650-354ae64db5b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY4fHxjYWNob3JybyUyMGZpbGhvdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="pet" className='pet' />
					<div className="info">
						<div className="cardHeader">
							<h3 className="nome">Nana</h3>
							<Femea className='femea' />
							{/* <Macho className='macho' /> */}
						</div>
						<div className="detalhes">
							<span className="idade"><Idade />03 meses</span>
							<span><Raca />Sem raça definida</span>
							<span><Castrado />Não castrado</span>
						</div>
						<div className="sobre">
							<ModalPerfilAdocaoNana/>
						</div>
					</div>
				</div>

				<div className="card">
					<img src="https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="pet" className='pet' />
					<div className="info">
						<div className="cardHeader">
							<h3 className="nome">Trix</h3>
							<Femea className='femea' />
							{/* <Macho className='macho' /> */}
						</div>
						<div className="detalhes">
							<span className="idade"><Idade />3 meses</span>
							<span><Raca />yorkshire</span>
							<span><Castrado />Castrado</span>
						</div>
						<div className="sobre">
							<ModalPerfilAdocaoTrix/>
						</div>
					</div>
				</div>

				<div className="card">
					<img src="https://s3.amazonaws.com/petz-cdm-stg/7182ab81-1f6c-4068-b3bc-ba3b124b3b35.jpeg" alt="pet" className='pet' />
					<div className="info">
						<div className="cardHeader">
							<h3 className="nome">Seu Jorge</h3>
							{/* <Femea className='femea' /> */}
							<Macho className='macho' />
						</div>
						<div className="detalhes">
							<span className="idade"><Idade />Adulto</span>
							<span><Raca />Persa</span>
							<span><Castrado />Castrado</span>
						</div>
						<div className="sobre">
							<ModalPerfilResgateSeuJorge/>
						</div>
					</div>
				</div>

				<div className="card">
					<img src="https://s3.amazonaws.com/petz-cdm-stg/f3ebabe6-8459-44b1-a94f-e8ba4838142e.jpeg" alt="pet" className='pet' />
					<div className="info">
						<div className="cardHeader">
							<h3 className="nome">Tigrinho</h3>
							{/* <Femea className='femea' /> */}
							<Macho className='macho' />
						</div>
						<div className="detalhes">
							<span className="idade"><Idade />7 meses</span>
							<span><Raca />Sem raça informada</span>
							<span><Castrado />Castrado</span>
						</div>
						<div className="sobre">
							<ModalPerfilResgateTigrinho/>
						</div>
					</div>
				</div>

				<div className="card">
					<img src="https://s3.amazonaws.com/petz-cdm-stg/10d2fe5c-d299-4c09-ae42-a43fdf3bdd95.jpeg" alt="pet" className='pet' />
					<div className="info">
						<div className="cardHeader">
							<h3 className="nome">Porsche</h3>
							<Macho className='macho' />
						</div>
						<div className="detalhes">
							<span className="idade"><Idade />1 ano</span>
							<span><Raca />Não definida</span>
							<span><Castrado />Castrado</span>
						</div>
						<div className="sobre">
							<ModalPerfilAdocaoPorsche/>
						</div>
					</div>
				</div>

				<div className="card">
					<img src="https://s3.amazonaws.com/petz-cdm-stg/90b563b2-eaed-432c-8082-879528b41ecd.jpeg" alt="pet" className='pet' />
					<div className="info">
						<div className="cardHeader">
							<h3 className="nome">Felicia</h3>
							{/* <Femea className='femea' /> */}
							<Macho className='macho' />
						</div>
						<div className="detalhes">
							<span className="idade"><Idade />Adulto</span>
							<span><Raca />Sem raça definida</span>
							<span><Castrado />Castrado</span>
						</div>
						<div className="sobre">
							<ModalPerfilResgateFelicia/>
						</div>
					</div>
				</div>

			
			</div>
		</Box>
	)
}

export default CardPetPerfil