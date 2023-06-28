import Box from '@mui/material/Box';
import Fera from './assets/img/fera.avif';
import './CardPetInicialResgate.css' //para importar jsx sempre é com letra maíuscula
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ModalInicialAdocaoFera from './modelo_modal/ModalInicialAdocaoFera'
import ModalInicialAdocaoOlaf from './modelo_modal/ModalInicialAdocaoOlaf'
import ModalInicialAdocaoDopo from './modelo_modal/ModalInicialAdocaoDopo'
import ModalInicialAdocaoMarco from './modelo_modal/ModalInicialAdocaoMarco'
import ModalInicialAdocaoPança from './modelo_modal/ModalInicialAdocaoPança'
import ModalInicialAdocaoSid from './modelo_modal/ModalInicialAdocaoSid'
import ModalInicialAdocaoMandy from './modelo_modal/modalInicialAdocaoMandy'

import {
	FaVenus as Femea,
	FaMars as Macho,
	FaHeart as Idade,
	FaClinicMedical as Castrado, 
	FaPaw as Raca,
} from 'react-icons/fa'

const CardPetInicialAdocao = () => {

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
			<h1>ADOÇÃO</h1>
			<Carousel
				className='carrossel'
				responsive={responsive}
				ssr={true} // means to render carousel on server-side.
			>
			<div className="card">
				<img src="https://images.unsplash.com/photo-1593750187391-6d1b45a3eb1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjYwfHxjYWNob3JybyUyMGZpbGhvdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="pet" className='pet' />
				<div className="info">
					<div className="cardHeader">
						<h3 className="nome">Mandy</h3>
						<Femea className='femea' />
						{/* <Macho className='macho' /> */}
					</div>
					<div className="detalhes">
					<span className="idade"><Idade />4 meses</span>
					<span><Raca />Mestiço pitbull</span>
					<span><Castrado />Castrado</span>
				</div>
				<ModalInicialAdocaoMandy/>				
				</div>
			</div>

			<div className="card">
				<img src="https://images.unsplash.com/photo-1519963183664-2adcfeb55889?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjgxfHxjYWNob3JybyUyMGZpbGhvdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="pet" className='pet' />
				<div className="info">
					<div className="cardHeader">
						<h3 className="nome">Fera</h3>
						<Femea className='femea' />
						{/* <Macho className='macho' /> */}
					</div>
					<div className="detalhes">
					<span className="idade"><Idade />7 meses</span>
					<span><Raca />pitbull</span>
					<span><Castrado />Não castrado</span>
				</div>
				<ModalInicialAdocaoFera/>
				</div>
			</div>

			<div className="card">
				<img src="https://www.rspca.org.uk/GenericImage/CallGenericImage?source=petSearch&size=large&imageId=365115" alt="pet" className='pet' />
				<div className="info">
					<div className="cardHeader">
						<h3 className="nome">Olaf</h3>
						{/* <Femea className='femea' /> */}
						<Macho className='macho' />
					</div>
					<div className="detalhes">
					<span className="idade"><Idade />2 anos</span>
					<span><Raca />Sem raça informada</span>
					<span><Castrado />Castrado</span>
				</div>
				<ModalInicialAdocaoOlaf/>
				</div>
			</div>

			<div className="card">
				<img src="https://images.unsplash.com/photo-1590856430047-45daca1d18c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY2fHxjYWNob3JybyUyMGZpbGhvdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="pet" className='pet' />
				<div className="info">
					<div className="cardHeader">
						<h3 className="nome">Dopo</h3>
						{/* <Femea className='femea' /> */}
						<Macho className='macho' />
					</div>
					<div className="detalhes">
					<span className="idade"><Idade />10 meses</span>
					<span><Raca />Sem raça informada</span>
					<span><Castrado />Castrado</span>
				</div>
				<ModalInicialAdocaoDopo/>
				</div>
			</div>

			<div className="card">
				<img src="https://s3.amazonaws.com/petz-cdm-stg/f41370d6-9ea3-49fe-9bba-6eb5808908c1.jpeg" alt="pet" className='pet' />
				<div className="info">
					<div className="cardHeader">
						<h3 className="nome">Marco</h3>
						{/* <Femea className='femea' /> */}
						<Macho className='macho' />
					</div>
					<div className="detalhes">
					<span className="idade"><Idade />1 ano</span>
					<span><Raca />Caramelo</span>
					<span><Castrado />Não castrado</span>
				</div>
				<ModalInicialAdocaoMarco/>
				</div>
			</div>

			<div className="card">
				<img src="https://s3.amazonaws.com/petz-cdm-stg/3b73e39d-243e-48f4-8f67-4531af3a1949.jpeg" alt="pet" className='pet' />
				<div className="info">
					<div className="cardHeader">
						<h3 className="nome">Pança</h3>
						<Femea className='femea' />
						{/* <Macho className='macho' /> */}
					</div>
					<div className="detalhes">
					<span className="idade"><Idade />1 mês</span>
					<span><Raca />Sem raça informada</span>
					<span><Castrado />Castrado</span>
				</div>
				<ModalInicialAdocaoPança/>
				</div>
			</div>

			<div className="card">
				<img src="https://s3.amazonaws.com/petz-cdm-stg/cb868905-f5a3-4c9a-a792-324b3bb6f0b5.jpeg" alt="pet" className='pet' />
				<div className="info">
					<div className="cardHeader">
						<h3 className="nome">Sid</h3>
						{/* <Femea className='femea' /> */}
						<Macho className='macho' />
					</div>
					<div className="detalhes">
					<span className="idade"><Idade />3 meses</span>
					<span><Raca />Sem </span>
					<span><Castrado />Castrado</span>
				</div>
				<ModalInicialAdocaoSid/>
				</div>
			</div>
			</Carousel >
		</Box>
	)
}

export default CardPetInicialAdocao