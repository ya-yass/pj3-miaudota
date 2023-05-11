import Box from "@mui/material/Box"
import * as React from 'react';

//componentes materia ui
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


//files
import './ModalDescricao.css'

//icons e imagens
import fotoPerfilCao from './assets/img/fotoPerfilCao.jpg'
import fotoAnunciante from './assets/img/fotoAnunciante.jpg'
import { BsXLg as Cancel } from 'react-icons/bs'
import {
  FaVenus as Femea,
  FaHeart as Idade,
  FaPaw as Raca,
  FaMapMarkerAlt as Local

} from 'react-icons/fa'




const ModalDescricao = () => {

  //abrir e fechar o modal principal
  const [open, setOpen] = React.useState(false);
  const handleOpen1 = () => setOpen(true);
  const handleClose1 = () => setOpen(false);

  //Modal Child
  function ChildModal() {
    const [open, setOpen] = React.useState(false);
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
          open={open}
          onClose={handleClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box sx={styles.Modal} className='selecionaTudo'>
            <Cancel className='botaoCancelModal' onClick={handleClose} />
            <span><h4>Editar Perfil</h4></span>
            <hr />

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

              <div className='BotõesImgs'>
                <div className=' botãoFotoPerfil'>
                  <div className='divTituloCampo'>
                    <label className='titulocampo'>Foto de Perfil</label>
                    <p>*</p>
                  </div>
                  <label className='tituloFile'>Adicionar foto</label>
                  <input type="file" />
                </div>
                <div className='botãoCapaPerfil'>
                  <div className='divTituloCampo'>
                    <label className='titulocampo'>Foto de Perfil</label>
                    <p>*</p>
                  </div>
                  <label className='tituloFile'>Adicionar foto</label>
                  <input type="file" />
                </div>
              </div>


              <div className='nomePerfilUsuario'>
                <div className='nome'>
                  <div className='divTituloCampo'>
                    <label className='titulocampo'>Nome</label>
                    <p>*</p>
                  </div>
                  <TextField
                    sx={{ borderRadius: '20px', height: '40px', width: '200px', marginBottom: '15px' }}
                    placeholder='Nome Sobrenome'
                    type="text"
                    className='input'
                    InputLabelProps={{ shrink: true }}
                  // onChange={handleFileChange}
                  />
                </div>
                <div className='usuario'>
                  <div className='divTituloCampo'>
                    <label className='titulocampo'>Usuário</label>
                    <p>*</p>
                  </div>
                  <TextField
                    sx={{ marginTop: '15px' }}
                    placeholder='@user123'
                    type="text"
                    className='input'

                    InputLabelProps={{ shrink: true }}

                  // onChange={handleFileChange}
                  />
                </div>
              </div>

              <div className='divTituloCampo'>
                <label className='titulocampo'>E-mail</label>
                <p>*</p>
              </div>
              <TextField
                sx={{ marginTop: '-10px' }}
                placeholder='fulano2021@gmail.com'
                type="text"
                id='inputEmail'

                InputLabelProps={{ shrink: true }}

              // onChange={handleFileChange}
              />

              <div className='divTituloCampo labelSenha'>
                <label className='titulocampo'>Senha</label>
                <p>*</p>
              </div>
              <TextField
                sx={{ marginTop: '-10px' }}
                placeholder='******'
                type="password"
                id='inputPass'

                InputLabelProps={{ shrink: true }}

              // onChange={handleFileChange}
              />
              <div className='idadeQtdAnimais'>

                <div className='IdadeUser'>
                  <div className='divTituloCampo '>
                    <label className='titulocampo'>Idade</label>
                    <p>*</p>
                  </div>
                  <TextField
                    sx={{ marginTop: '-10px' }}
                    placeholder='Ex 23'
                    type="text"
                    id='idadeCampo'

                    InputLabelProps={{ shrink: true }}

                  // onChange={handleFileChange}
                  />
                </div>
                <div className='QtdAnimais'>
                  <div className='divTituloCampo '>
                    <label className='titulocampo'>Quantos animais?</label>
                    <p>*</p>
                  </div>
                  <TextField
                    sx={{ marginTop: '-10px' }}
                    placeholder='03'
                    type="text"
                    id='qtdAnimaisCampo'

                    InputLabelProps={{ shrink: true }}

                  // onChange={handleFileChange}
                  />
                </div>

              </div>


              <div className='Botoesmodal'>
                <p className='botãoCancelarEditar' onClick={handleClose} >Cancelar</p>
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
        <button onClick={handleOpen1}>Abrir modal</button>
        <Modal
          open={open}
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

export default ModalDescricao