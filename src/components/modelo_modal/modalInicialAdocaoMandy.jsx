import Box from "@mui/material/Box"
import * as React from 'react';

//componentes materia ui
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';


//files
import '../modais/ModalDescricaoAdocao.css'


import { BsXLg as Cancel } from 'react-icons/bs'
import {
	FaVenus as Femea,
	// FaMars as Macho,
	FaHeart as Idade,
	FaPaw as Raca,
	FaClinicMedical as Castrado
} from 'react-icons/fa'




const ModalInicialAdocaoMandy = () => {

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
          <button onClick={handleOpen} variant="contained" className="btnQueroAdotar">QUERO ADOTAR</button>
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
                    placeholder='“Olá! Vi o Mali para adoção e estou interessado em adotá-lo...”'
                    type="text"
                    className='inputContato'

                    InputLabelProps={{ shrink: true }}

                  // onChange={handleFileChange}
                  />
                </div>
              </div>


              <div className='btnContatos'>
                <button onClick={handleOpen} variant="contained" className="btnQueroAdotar">ENVIAR</button>
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
                    <img src="https://images.unsplash.com/photo-1593750187391-6d1b45a3eb1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjYwfHxjYWNob3JybyUyMGZpbGhvdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"alt="FotoPet" className="fotoPet" />
                  </div>
                  
                  <div className="textpet">
                    <div className="nomeIcon">
                      <p className="nomepet">Mandy</p>
                      <Femea className="femea"/>
                      
                    </div>
                    <p>Mandy é uma cachorrinha bem ativa que adora brincar. Ela é muito dócil, gosta de colo e se dá bem com crianças. Ela é porte médio e tem 4 meses. Se quiser encher sua casa de alegria é a companhia perfeita!</p>
                  </div>
                </div>
                <div className="infoPeteUser">
                  

                  <div className="Iconsinfo">
                    <div className="infoDopet">
                      <span className="idade"><Idade />4 meses</span>
                      <span><Raca/>Mestiço pitbull</span>
                      <span><Castrado/>castrado</span>
                      <span><Femea/> Fêmea</span>

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

export default ModalInicialAdocaoMandy