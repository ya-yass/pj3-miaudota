import Box from "@mui/material/Box"
import * as React from 'react';


//componentes materia ui
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';




//files
import '../modais/ModalDescricaoResgate.css'

import { BsXLg as Cancel } from 'react-icons/bs'
import {
	FaMars as Macho,

  FaHeart as Idade,
  FaPaw as Raca,
  FaMapMarkerAlt as Local


} from 'react-icons/fa'




const ModalInicialResgateChaves = () => {


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
                    <img src="https://images.unsplash.com/photo-1560150844-220a5b58df38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ3fHxjYWNob3JybyUyMGZpbGhvdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="FotoPet" className="fotoPet" />
                  </div>
                  <div className="textpet">
                    <div className="nomeIcon">
                      <p className="nomepet">Chaves</p>
                      <Macho className="macho"/>

                    </div>
                    <p>Ele estava andando na praça dos bombeiros, estava bem vazia. Quando eu passei o barulho das minhas chaves interessou ele. É muito brincalhão e se distrai mutio fácil.</p>
                  </div>
                </div>
                <div className="infoPeteUser">
                  


                  <div className="Iconsinfo">
                    <div className="infoDopet">
                      <span className="idade porte"><Idade/>Filhote</span>
                      <span className="idade"><Idade/>Pequeno</span>
                      <span><Raca />Sem raça</span>
                      <span> 
                        
                      </span>
                      <span className="localPet"><Local /> Foi encontrado no bairro Martim de Sá</span>


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


export default ModalInicialResgateChaves
