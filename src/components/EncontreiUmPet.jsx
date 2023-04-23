import Box from '@mui/material/Box';
//modal
import * as React from 'react';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
//formulário
import TextField from '@mui/material/TextField';
import ButtonEnviar from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
//imagens e files
import AchadoFoto from './assets/img/achado-foto.png';
import './EncontreiUmPet.css'
import logo from './assets/img/miaudota-logo.png'
import { BsXLg as Cancel } from 'react-icons/bs'



const EncontreiUmPet = () => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };



  return (
    <Box>
      <div className='cards'>

        <button className="btnEncontrei" onClick={handleOpen}>
          <div className='mask'></div>
          <p>Encontrei um pet</p>
          <img src={AchadoFoto} alt="Anuncie um animal para adoção" className='imagemPet ' />
        </button>
      </div>



      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">

        <Box sx={styles.Modal}>
          <Cancel className='botaoCancelModal' onClick={handleClose} />
          <Typography id="modal-modal-title">
            <img src={logo} className='logoModal' alt='Logo do Modal'></img>
            <div>
              <h3>Encontrei um pet</h3>
              <p>Anuncie um pet que você encontrou perdido na rua para que ele volte ao lar</p>
            </div>
          </Typography>

           {/* teste */}

          <FormControl >
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={value}
              onChange={handleChange}
            >
              <label className='titulocampo'>Qual o animal você encontrou?</label>
              <div>
                <FormControlLabel value="cachorro" control={<Radio />} label="Cachorro" className='labelCachorro' />

                <FormControlLabel value="gato" className='labelGato' control={<Radio />} label="Gato" />
              </div>
            </RadioGroup>
          </FormControl>

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
            <div className='divTituloCampo tituloCampoNome'>
              <label className='titulocampoNome'>Nome</label>
              <p>(Opcional)</p>
            </div>
            <TextField
              sx={{ borderRadius: '20px', height: '40px', width: '200px', marginBottom: '15px' }}
              placeholder='Digite aqui o nome do pet'
              type="text"
              className='input'
              InputLabelProps={{ shrink: true }}

            // onChange={handleFileChange}
            />
            <div className='divTituloCampo'>
              <label className='titulocampo'>Idade</label>
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

    </Box>
  )
}

const styles = {
  Modal: {

    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    p: 4,
    borderRadius: '20px',
  }

}

export default EncontreiUmPet

