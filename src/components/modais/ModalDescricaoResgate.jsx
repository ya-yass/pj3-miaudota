import Box from "@mui/material/Box"
import * as React from 'react';


//componentes materia ui
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';




//files
import '../modais/ModalDescricaoResgate.css'


//icons e imagens
import fotoAnunciante from '../assets/img/fotoAnunciante.jpg'


import { BsXLg as Cancel } from 'react-icons/bs'
import {
  FaVenus as Femea,
	FaMars as Macho,

  FaHeart as Idade,
  FaPaw as Raca,
  FaMapMarkerAlt as Local


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


const ModalDescricaoResgate = (props) => {


  //abrir e fechar o modal principal
  const [modalOpen, setOpen] = React.useState(false);
  const handleOpen1 = () => setOpen(true);
  const handleClose1 = () => setOpen(false);


  //Modal Child
  function ChildModal() {
    const [modalOpen, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };


    return (
      <React.Fragment>
        <div className="botaoChild">
          <span onClick={handleClose1} className="btnCancelar">Cancelar</span>
          <button onClick={handleOpen} variant="contained" className="btnEncontrei">ENCONTREI MEU PET</button>
        </div>
        <Modal
          open={modalOpen}
          onClose={handleClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box className='modalContato'>
            <Cancel className='botaoCancelModal' onClick={handleClose} />
            <span><h4 className="entrarContato">Entrar em contatos</h4></span>
            <span className="informativo">Para a segurança dos usuários, não compartilhamos informações pessoais.</span>
            <Typography id="modal-modal-description"
              sx={{
                mt: 2,
                '& fieldset': {
                  display: 'none',
                },
                '& legend': {
                  display: 'none',
                }
              }}>


              <div className='Campos'>
                <div className='emailUsuario'>
                  <div className='divTituloCampo'>
                    <label className='titulocampo'>E-mail</label>
                    <p>*</p>
                  </div>
                  <TextField
                    placeholder='Digite seu e-mail'
                    type="text"
                    className='inputContato'


                    InputLabelProps={{ shrink: true }}


                  // onChange={handleFileChange}
                  />
                </div>


                <div className='nomeUsuario'>
                  <div className='divTituloCampo'>
                    <label className='titulocampo'>Seu nome</label>
                    <p>*</p>
                  </div>
                  <TextField
                    placeholder='Digite seu nome completo'
                    type="text"
                    className='inputContato'


                    InputLabelProps={{ shrink: true }}


                  // onChange={handleFileChange}
                  />
                </div>


                <div className='descricaoUsuario'>
                  <div className='divTituloCampo divDescricao'>
                    <div className="tituloDescricao">
                      <label className='titulocampo'>Descrição</label>
                      <p>*</p>
                    </div>
                    <span className="informativo">Conte um pouco sobre você.</span>
                  </div>
                  <TextField
                    sx={{ height: '123px' }}
                    placeholder='“Olá! Vi o Mali para adoção e estou interessado em adotá-lo"'
                    type="text"
                    className='inputContato'


                    InputLabelProps={{ shrink: true }}


                  // onChange={handleFileChange}
                  />
                </div>
              </div>




              <div className='btnContatos'>
                <button onClick={handleOpen} variant="contained" className="btnEncontrei">ENVIAR</button>
              </div>


            </Typography>
          </Box>
        </Modal>
      </React.Fragment >
    );
  }//funcao modal child fechamento




  return (
    <>
      <Box>
        <div className="sobre">
          <button className='btnSobrePet' onClick={handleOpen1}>SOBRE O PET</button>
        </div>


        <Modal
          open={modalOpen}
          onClose={handleClose1}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description">


          <Box sx={styles.Modal} className='selecionaTudo'>
            <Cancel className='botaoCancelModal' onClick={handleClose1} />


            <Typography id="modal-modal-description"
              sx={{
                mt: 2,
                '& fieldset': {
                  display: 'none',
                },
                '& legend': {
                  display: 'none',
                }
              }}>


              <div className="infoModal">
                <div className="infopet">
                  <div className="fotoPetDiv">
                    <img src={props.data.foto} alt="FotoPet" className="fotoPet" />
                  </div>
                  <div className="textpet">
                    <div className="nomeIcon">
                      <p className="nomepet">{props.data.nome}</p>
                      <span> 
                        {props.data.sexo === 'femea' ? (
                        <Femea/>
                        ) : (<Macho/> )
                      } 
                      </span>
                    </div>
                    <p>{props.data.descricao}</p>
                  </div>
                </div>
                <div className="infoPeteUser">
                  <div className="quemAnunciou">
                    <img src={fotoAnunciante} alt="Foto Anunciante" className="fotoAnunciante" />
                    <div className="infoAnunciante">
                      <p className="tituloAnunciante">Anunciante</p>
                      <p className="nomeAnunciante">Ana Luiza</p>
                    </div>
                  </div>


                  <div className="Iconsinfo">
                    <div className="infoDopet">
                      <span className="idade porte"><Idade/>{props.data.idade}</span>
                      <span className="idade"><Idade/>{props.data.porte}</span>
                      <span><Raca />{props.data.raca}</span>
                      <span> 
                        {props.data.sexo === 'femea' ? (
                        <Femea/>
                        ) : (<Macho/> )
                      } 
                      </span>
                      <span className="localPet"><Local /> Foi encontrado no bairro {bairroTratado[props.data.bairro]}</span>


                    </div>
                  </div>
                </div>
              </div>
            </Typography>
            <ChildModal />


          </Box>
        </Modal>


      </Box>
    </>
  )
}


const styles = {


  Modal: {


    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 673,
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    p: 4,
    borderRadius: '20px',
  }




}


// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   pt: 2,
//   px: 4,
//   pb: 3,
// };


export default ModalDescricaoResgate
