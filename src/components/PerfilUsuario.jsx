import Box from '@mui/material/Box';
//Modal
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import * as React from 'react';
//formulário
import TextField from '@mui/material/TextField';
import ButtonEnviar from '@mui/material/Button';

//compónentes e files
import CardPet from '../components/Card-pet'
import './PerfilUsuario.css'
//imagens e icones
import logo from './assets/img/miaudota-logo.png'
import capaexemplo from './assets/img/capaexemplo.png'
import fotoperfil from './assets/img/fotoperfil.png'
import { FaPaw as Raca } from 'react-icons/fa'
import { ImCancelCircle as Cancel } from 'react-icons/im'


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
            <TextField
              label="Nome:"
              sx={{ borderRadius: '20px', height: '40px', width: '200px', marginBottom: '15px' }}
              placeholder='Nome Sobrenome'
              type="text"
              InputLabelProps={{ shrink: true }}

            // onChange={handleFileChange}
            />
            <TextField
              sx={{ marginTop: '15px' }}
              label="Nome De Usuário:"
              placeholder='@user123'
              type="text"
              InputLabelProps={{ shrink: true }}

            // onChange={handleFileChange}
            />

            <TextField
              sx={{ marginTop: '-10px' }}
              label="Quantidade de Pets que possui:"
              placeholder='ex: 1'
              type="text"
              InputLabelProps={{ shrink: true }}

            // onChange={handleFileChange}
            />

            <TextField
              sx={{ marginTop: '-10px' }}
              label="Foto"
              type="file"
              InputLabelProps={{ shrink: true }}



            // onChange={handleFileChange}
            />
            <ButtonEnviar variant="contained" id='botaoEnviar' >Editar</ButtonEnviar>

          </Typography>
        </Box>
      </Modal>

      <CardPet />

    </Box>
  )
}


const styles = {
  Button: {
    float: 'right',
    marginTop: '-176px',
    marginRight: '30px',
    position: 'relative',
    width: '80px',
    height: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '5%',
    fontSize: '15px',
    '&:hover': {
      color: '#40D6FF'
    }
  },

  Modal: {

    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  }


}

export default PerfilUsuario