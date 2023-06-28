import Box from '@mui/material/Box';
import './CardPetInicialResgate.css' //para importar jsx sempre é com letra maíuscula
import ModalDescricaoResgate from "./modais/ModalDescricaoResgate"


import {
  FaVenus as Femea,
  FaMars as Macho,
  FaHeart as Idade,
  FaMapMarkerAlt as Local, //https://react-icons.github.io/react-icons/icons?name=fa
  FaPaw as Raca,
} from 'react-icons/fa'


const bairroTratado ={
  1:['Balneário California'],
  2:['Balneário Copacabana'],
  3:['Balneário Golfinhos'],
  4:['Balneário Forest'],
  5:['Balneário Recando do Sol'],
  6:['Barranco Alto'],
  7:['Benfica'],
  8:['Canta Galo'],
  9:['Capricórnio'],
  10:['Caputera'],
  11:['Centro'],
  12:['Cidade Jardim'],
  13:['Costa Nova'],
  14:['Delfim Verde'],
  15:["Estrela D'Alva"],
  16:['Getuba'],
  17:['Indaiá'],
  18:['Ipiranga'],
  19:['Itaúna'],
  20:['Jaraguá'],
  21:['Jaraguazinho'],
  22:['Jardim Aruan'],
  23:['Jardim Britânia'],
  24:['Jardim Califórnia'],
  25:['Jardim Capricórnio'],
  26:['Jardim Casa Branca'],
  27:['Jardim das Gaivotas'],
  28:['Jardim Jaqueira'],
  29:['Jardim Manari'],
  30:['Jardim Mariella'],
  31:['Jardim Maristela'],
  32:['Jardim Olaria'],
  33:['Jardim Primavera'],
  34:['Jardim Rio Santos'],
  35:['Jardim Santa Rosa'],
  36:['Jardim Tarumãs'],
  37:['Jardim Terralão'],
  38:['Mar Azul'],
  39:['Martim de Sá'],
  40:['Massaguaçu'],
  41:['Mirante da Orla'],
  42:['Morro do Algodão'],
  43:['Park Imperial'],
  44:['Parque Balneário Poiares'],
  45:['Pegorelli'],
  46:['Perequê Mirim'],
  47:['Poiares'],
  48:['Pontal de Santa Marina'],
  49:['Ponte Seca'],
  50:['Portal da Fazendinha'],
  51:['Porto Novo'],
  52:['Praia da Cocanha'],
  53:['Praia da Mococa'],
  54:['Praia das Palmeiras'],
  55:['Prainha'],
  56:['Recanto Som do Mar'],
  57:['Rio Claro'],
  58:['Rio do Ouro'],
  59:['Sumaré'],
  60:['Tabatinga'],
  61:['Tinga'],
  62:['Travessão'],
  63:['Vapapesca'],
  64:['Vila Nossa Senhora Aparecida'],
  65:['Vila Ponte Seca']  
}


const CardResgate = ({perdido, setPerdidos, perdidos}) => {


  return (
    <Box className='div'>
      <div className="card">
        <img src={perdido.foto} alt="pet" className='pet' />
        <div className="info">
          <div className="cardHeader">
            <h3 className="nome">{perdido.nome}</h3>
            {perdido.sexo === 'femea' ? (
          			<Femea className="femea"/>
          			) : (<Macho className="macho"/> )
       			  }
          </div>
          <div className="detalhes">
            <span className="idade"><Idade />{perdido.idade}</span>
            <span><Raca />{perdido.raca}</span>
            <span><Local />{bairroTratado[perdido.bairro]}</span>
          </div>
          <div className="sobre">
            < ModalDescricaoResgate data={perdido}/>
          </div>
        </div>
      </div>
    </Box>
  )
}


export default CardResgate


