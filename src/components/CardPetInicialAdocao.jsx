import Box from '@mui/material/Box';
import Fera from './assets/img/fera.avif';
import './CardPetInicialResgate.css' //para importar jsx sempre é com letra maíuscula
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ModalInicialAdocaoMandy from '../components/modelo_modal/modalInicialAdocaoMandy'

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
				<img src={Fera} alt="pet" className='pet' />
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
				<img src={Fera} alt="pet" className='pet' />
				<div className="info">
					<div className="cardHeader">
						<h3 className="nome">Fera</h3>
						<Femea className='femea' />
						{/* <Macho className='macho' /> */}
					</div>
					<div className="detalhes">
					<span className="idade"><Idade />7 meses</span>
					<span><Raca />Pastor alemão</span>
					<span><Castrado />Não castrado</span>
				</div>
				</div>
			</div>

			<div className="card">
				<img src={Fera} alt="pet" className='pet' />
				<div className="info">
					<div className="cardHeader">
						<h3 className="nome">Olaf</h3>
						{/* <Femea className='femea' /> */}
						<Macho className='macho' />
					</div>
					<div className="detalhes">
					<span className="idade"><Idade />2 anos</span>
					<span><Raca />Angorá</span>
					<span><Castrado />Castrado</span>
				</div>
				</div>
			</div>

			<div className="card">
				<img src={Fera} alt="pet" className='pet' />
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
				</div>
			</div>

			<div className="card">
				<img src={Fera} alt="pet" className='pet' />
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
				</div>
			</div>

			<div className="card">
				<img src={Fera} alt="pet" className='pet' />
				<div className="info">
					<div className="cardHeader">
						<h3 className="nome">Pança</h3>
						<Femea className='femea' />
						{/* <Macho className='macho' /> */}
					</div>
					<div className="detalhes">
					<span className="idade"><Idade />2 anos</span>
					<span><Raca />Sem raça informada</span>
					<span><Castrado />Castrado</span>
				</div>
				</div>
			</div>

			<div className="card">
				<img src={Fera} alt="pet" className='pet' />
				<div className="info">
					<div className="cardHeader">
						<h3 className="nome">Sid</h3>
						{/* <Femea className='femea' /> */}
						<Macho className='macho' />
					</div>
					<div className="detalhes">
					<span className="idade"><Idade />3 meses</span>
					<span><Raca />Mestiço Beagle</span>
					<span><Castrado />Castrado</span>
				</div>
				</div>
			</div>
			</Carousel >
		</Box>
	)
}

export default CardPetInicialAdocao