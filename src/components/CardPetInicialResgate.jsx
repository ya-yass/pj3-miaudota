import Box from '@mui/material/Box';
import Fera from './assets/img/fera.avif';
import './CardPetInicialResgate.css' //para importar jsx sempre é com letra maíuscula
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ModalInicialResgateNana from './modelo_modal/ModalInicialResgateNana'
import ModalInicialResgateSabao from './modelo_modal/ModalInicialResgateSabao'
import ModalInicialResgateBubu from './modelo_modal/ModalInicialResgateBubu'
import ModalInicialResgateChaves from './modelo_modal/ModalInicialResgateChaves'
import ModalInicialResgateVivi from './modelo_modal/ModalInicialResgateVivi'
import ModalInicialResgateCuca from './modelo_modal/ModalInicialResgateCuca'
import ModalInicialResgateDavi from './modelo_modal/ModalInicialResgateDavii'

import {
	FaVenus as Femea,
	FaMars as Macho,
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
				<img src="https://www.rspca.org.uk/GenericImage/CallGenericImage?source=petSearch&size=large&imageId=A244315" alt="pet" className='pet' />
				<div className="info">
					<div className="cardHeader">
						<h3 className="nome">Davi</h3>
						<Macho className='macho' />
					</div>
					<div className="detalhes">
						<span className="idade"><Idade />Não informado</span>
						<span><Raca />Raça não informada</span>
						<span><Local />Martim de Sá</span>
					</div>
					<div className="sobre">
							<ModalInicialResgateDavi/>
						</div>
				</div>
			</div>
			
			<div className="card">
				<img src="https://amparanimal.org.br/wp-content/webp-express/webp-images/uploads/2022/07/lobinho.jpg.webp" alt="pet" className='pet' />
				<div className="info">
					<div className="cardHeader">
						<h3 className="nome">Nana</h3>
						<Femea className='femea' />
						{/* <Macho className='macho' /> */}
					</div>
					<div className="detalhes">
						<span className="idade"><Idade />Filhote</span>
						<span><Raca />Sem raça</span>
						<span><Local />Pontal de Santa Marina</span>
					</div>
					<ModalInicialResgateNana/>
				</div>
			</div>
			
			<div className="card">
				<img src="https://images.unsplash.com/photo-1614178730713-4badc749c333?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNhY2hvcnJvJTIwZmlsaG90ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="pet" className='pet' />
				<div className="info">
					<div className="cardHeader">
						<h3 className="nome">Sabão</h3>
						{/* <Femea className='femea' /> */}
						<Macho className='macho' />
					</div>
					<div className="detalhes">
						<span className="idade"><Idade />Adulto</span>
						<span><Raca />Sem raça informada</span>
						<span><Local />Centro</span>
					</div>
					<ModalInicialResgateSabao/>
				</div>
			</div>

			<div className="card">
				<img src={Fera} alt="pet" className='pet' />
				<div className="info">
					<div className="cardHeader">
						<h3 className="nome">Bubu</h3>
						{/* <Femea className='femea' /> */}
						<Macho className='macho' />
					</div>
					<div className="detalhes">
						<span className="idade"><Idade />Adutlo</span>
						<span><Raca />Pittbull</span>
						<span><Local />Boxer</span>
					</div>
					<ModalInicialResgateBubu/>
				</div>
			</div>

			<div className="card">
				<img src={Fera} alt="pet" className='pet' />
				<div className="info">
					<div className="cardHeader">
						<h3 className="nome">Chaves</h3>
						{/* <Femea className='femea' /> */}
						<Macho className='macho' />
					</div>
					<div className="detalhes">
						<span className="idade"><Idade />Filhote</span>
						<span><Raca />Raça não informada</span>
						<span><Local />Martim de Sá</span>
					</div>
					<div className="sobre">
					</div>
					<ModalInicialResgateChaves/>
				</div>
			</div>

			<div className="card">
				<img src={Fera} alt="pet" className='pet' />
				<div className="info">
					<div className="cardHeader">
						<h3 className="nome">Vivi</h3>
						<Femea className='femea' />
						{/* <Macho className='macho' /> */}
					</div>
					<div className="detalhes">
						<span className="idade"><Idade />Adulta</span>
						<span><Raca />Caramelo</span>
						<span><Local />Prainha</span>
					</div>
					<div className="sobre">
					</div>
					<ModalInicialResgateVivi/>
				</div>
			</div>

			<div className="card">
				<img src={Fera} alt="pet" className='pet' />
				<div className="info">
					<div className="cardHeader">
						<h3 className="nome">Cuca</h3>
						<Femea className='femea' />
						{/* <Macho className='macho' /> */}
					</div>
					<div className="detalhes">
						<span className="idade"><Idade />Não informado</span>
						<span><Raca />Raça não infomada</span>
						<span><Local />Morro do algodão</span>
					</div>
					<div className="sobre">
					</div>
					<ModalInicialResgateCuca/>
				</div>
			</div>
			</Carousel >
		</Box>
	)
}

export default CardPetInicialResgate