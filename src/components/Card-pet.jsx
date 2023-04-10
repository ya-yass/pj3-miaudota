import Box from '@mui/material/Box';
import Foto from './assets/img/pet1.jpg';
import './Card-pet.css' //para importar jsx sempre é com letra maíuscula

import {
  FaVenus as Femea,
  // FaMars as Macho,
  FaHeart as Idade,
  FaSyringe as Vacina,
  FaPaw as Raca,
  FaClinicMedical as Castrado
} from 'react-icons/fa'

const CardPet = () => {
  return (
    <Box>
      <h1>Pets para adoção</h1>
      <div className="slide">
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
            <button>SOBRE O PET</button>
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
            <button>SOBRE O PET</button>
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
            <button>SOBRE O PET</button>
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
            <button>SOBRE O PET</button>
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
            <button>SOBRE O PET</button>
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
            <button>SOBRE O PET</button>
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
            <button>SOBRE O PET</button>
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
            <button>SOBRE O PET</button>
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
            <button>SOBRE O PET</button>
          </div>
        </div>

      </div>
    </Box>
  )
}

export default CardPet