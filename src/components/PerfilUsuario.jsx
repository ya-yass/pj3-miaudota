import Box from '@mui/material/Box';
//Modal
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import * as React from 'react';
//formulário
import TextField from '@mui/material/TextField';
import ButtonEnviar from '@mui/material/Button';

//componentes e files
import CardPetPerfil from '../components/Card-pet-perfil'
import './PerfilUsuario.css'
//imagens e icones
import logo from './assets/img/miaudota-logo.png'
import capaexemplo from './assets/img/capaexemplo.png'
import fotoperfil from './assets/img/fotoperfil.png'
import { FaPaw as Raca } from 'react-icons/fa'
import { BsXLg as Cancel } from 'react-icons/bs'


//Ajeitar posição dass informações do perfil 
//estilizar formulário modal


const PerfilUsuario = () => {


  //abrir e fechar o modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{
      margin: '0px',
    }}>
      <img src={capaexemplo} className='capa' alt='Foto de capa'></img>

      <div className='informacaoUsuario'>
        <img src={fotoperfil} className='fotoperfil' alt='Foto de perfil'></img>
        <div className='infoNameUserIcon'>
          <div className='editarENome'>

            <h2 className='nomeusuario'>Maria Fabris</h2>
            <button style={styles.Button} onClick={handleOpen} >Editar</button>
          </div>

          <div className='userAndPet'>
            <p>@mariafabris</p>
            <div className='iconPet'>
              <Raca />
              <p>1</p>
            </div>
          </div>
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">

        <Box sx={styles.Modal} className='selecionaTudo'>
          <Cancel className='botaoCancelModal' onClick={handleClose} />
          <Typography id="modal-modal-title">
            <img src={logo} className='logoModal' alt='Logo do Modal'></img>
          </Typography>
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
              <ButtonEnviar variant="contained" id='botaoEnviar' >Editar</ButtonEnviar>
              <p className='botãoCancelarEditar' onClick={handleClose} >Cancelar</p>
            </div>

          </Typography>
        </Box>
      </Modal>

      <CardPetPerfil />

    </Box>
  )
}


const styles = {
  Button: {
    backgroundColor: '#F6823F',
    marginLeft: '15px',
    float: 'right',
    color: 'white',
    position: 'relative',
    width: '80px',
    height: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '20px',
    fontSize: '15px',
    border: 'none'


  },

  Modal: {

    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    p: 4,
    borderRadius: '20px',
  }


}

export default PerfilUsuario