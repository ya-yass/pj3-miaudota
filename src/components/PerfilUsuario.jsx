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


//arrumar cards
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
        <h2 className='nomeusuario'>Maria Fabris</h2>
        <div className='userAndPet'>
          <p>@mariafabris</p>
          <div className='iconPet'>
            <p>1</p>
            <Raca />
          </div>
        </div>
      </div>
      <button style={styles.Button} onClick={handleOpen} >Editar</button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">

        <Box sx={styles.Modal}>
          <Cancel className='botaoCancelModal' onClick={handleClose} />
          <Typography id="modal-modal-title">
            <img src={logo} className='logoModal' alt='Logo do Modal'></img>
            <h3>Editar Perfil</h3>
          </Typography>

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
           <div className='divTituloCampo'>
            <label className='titulocampo'>Quantidade de pets que possui</label>
            <p>*</p>
          </div>
            <TextField
              sx={{ marginTop: '-10px' }}
              placeholder='ex: 1'
              type="text"
              className='input'

              InputLabelProps={{ shrink: true }}

            // onChange={handleFileChange}
            />

          <div className='divTituloCampo'>
            <label className='titulocampo'>Foto de Perfil</label>
            <p>*</p>
          </div>
            
          <label className='tituloFile'>Adicionar foto</label>
          <input type="file" />
            
            <ButtonEnviar variant="contained" id='botaoEnviar' >Editar</ButtonEnviar>

          </Typography>
        </Box>
      </Modal>

      <CardPetPerfil />

    </Box>
  )
}


const styles = {
  Button: {
    backgroundColor:'#F6823F',
    float: 'right',
    color: 'white',
    marginTop: '-178px',
    marginRight: '30px',
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