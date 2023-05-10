import Box from "@mui/material/Box"
import * as React from 'react';

//componentes materia ui
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
//files
import './ModalDescricao.css'

//icons e imagens
import fotoPerfilCao from './assets/img/fotoPerfilCao.jpg'
import { BsXLg as Cancel } from 'react-icons/bs'
import {
	FaVenus as Femea,
} from 'react-icons/fa'





const ModalDescricao = () => {

   //abrir e fechar o modal
   const [open, setOpen] = React.useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);

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
        <Button onClick={handleOpen} variant="contained" id='botaoEnviar'>Open Child Modal</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box sx={{ ...style, width: 200 }}>
            <h2 id="child-modal-title">Text in a child modal</h2>
            <p id="child-modal-description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            <Button onClick={handleClose}>Close Child Modal</Button>
          </Box>
        </Modal>
      </React.Fragment>
    );
  }

  return (
    <>
      <Box>
        <button onClick={handleOpen}>Abrir modal</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">

        <Box sx={styles.Modal} className='selecionaTudo'>
          <Cancel className='botaoCancelModal' onClick={handleClose} />
      
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

            
          <div className="infopet">
            <img src={fotoPerfilCao} alt="FotoPet" className="fotoPet"/>
            <div className="textpet">
              <div className="nomeIcon">
                <p className="nomepet">Belinha</p>
                <Femea className='femea'/>
              </div>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio aperiam nulla, eaque ipsum in quibusdam placeat aspernatur cum asperiores dolorum odio reiciendis vitae eius hic animi error dolore rerum quos.</p>
              </div>
          </div>

          <div>
            <img src="" alt="Foto Anunciante" />
            <div>
              <p>Anunciante</p>
              <p>João Vitor</p>
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

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default ModalDescricao