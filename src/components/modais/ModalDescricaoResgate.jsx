import Box from "@mui/material/Box"
import * as React from 'react';

//componentes materia ui
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


//files
import '../modais/ModalDescricaoResgate.css'

//icons e imagens
import fotoPerfilCao from '../assets/img/fotoPerfilCao.jpg'
import fotoAnunciante from '../assets/img/fotoAnunciante.jpg'

import { BsXLg as Cancel } from 'react-icons/bs'
import {
  FaVenus as Femea,
  FaHeart as Idade,
  FaPaw as Raca,
  FaMapMarkerAlt as Local

} from 'react-icons/fa'




const ModalDescricaoResgate = () => {

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
          <Button onClick={handleOpen} variant="contained" className="btnEncontrei">ENCONTREI MEU PET</Button>
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
                <Button onClick={handleOpen} variant="contained" className="btnEncontrei">ENVIAR</Button>
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
                  <img src={fotoPerfilCao} alt="FotoPet" className="fotoPet" />
                  <div className="textpet">
                    <div className="nomeIcon">
                      <p className="nomepet">Belinha</p>
                      <Femea className='femea' />
                    </div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio aperiam nulla, eaque ipsum in quibusdam placeat aspernatur cum asperiores dolorum odio reiciendis vitae eius hic animi error dolore rerum quos.</p>
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
                      <span className="idade"><Idade />03 meses</span>
                      <span><Raca />Sem raça definida</span>
                      <span> <Femea /> Fêmea</span>
                      <span className="localPet"><Local /> Foi encontrado na Martim de Sá</span>

                    </div>
                  </div>
                </div>
                <div className="maisFotos">
                  <img src={fotoPerfilCao} alt="" />
                  <img src={fotoPerfilCao} alt="" />
                  <img src={fotoPerfilCao} alt="" />
                  <img src={fotoPerfilCao} alt="" />

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