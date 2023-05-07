import Box from '@mui/material/Box';
//modal
import * as React from 'react';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
//formulario
import TextField from '@mui/material/TextField';
import ButtonEnviar from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
//imagens e files
import AdocaoFoto from './assets/img/card-pet-adotar.png'
import logo from './assets/img/miaudota-logo.png'
import './EncontreiUmPet.css'
import { BsXLg as Cancel } from 'react-icons/bs'




const AnunciaraAdocao = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [sexo, setValue1] = React.useState('');
  const [tipoAnimal, setValue2] = React.useState('');
  const [castrado, setValue3] = React.useState('');

  const handleChange = (event) => {
    setValue1(event.target.sexo);
    setValue2(event.target.tipoAnimal);
    setValue3(event.target.castrado);
  };

  return (
    <Box>
      <div className='cards'>

        <button className="btnEncontrei" onClick={handleOpen}>
          <div className='mask'></div>
          <p>Colocar um pet para adoção</p>
          <img src={AdocaoFoto} alt="Anuncie um animal para adoção" className='imagemPet imagemPetEncontrado ' />
        </button>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">

        <Box sx={styles.Modal}>
          <Cancel className='botaoCancelModal' onClick={handleClose} />
          <Typography id="modal-modal-title" component="div">
            <img src={logo} className='logoModal' alt='Logo do Modal'></img>
            <div>
              <h3>COLOQUE PARA ADOÇÃO</h3>
              <p>Nos ajude, tente ser específico nos campos do formulário para facilitar a adoção do pet.</p>
            </div>
          </Typography>

          {/* teste */}

          <FormControl >
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="tipoAnimal"
              value={tipoAnimal}
              onChange={handleChange}
            >
              <div className='divTituloCampo'>
                <label className='titulocampo'>Qual animal você está anunciando?</label>
                <p>*</p>
              </div>

              <div>
                <FormControlLabel value="cachorro" control={<Radio />} label="Cachorro" className='labelCachorro' />

                <FormControlLabel value="gato" className='labelGato' control={<Radio />} label="Gato" />
              </div>
            </RadioGroup>
          </FormControl>

          <Typography id="modal-modal-description" component="div"
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
              <p>*</p>
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
              placeholder='Ex: 4 meses'
              type="text"
              className='input'

              InputLabelProps={{ shrink: true }}

            // onChange={handleFileChange}
            />
            <div className='divTituloCampo'>
              <label className='titulocampo'>Raça</label>
              <p>*</p>
            </div>
            <TextField
              sx={{ marginTop: '-10px' }}
              placeholder='Ex: Sem raça'
              type="text"
              className='input'

              InputLabelProps={{ shrink: true }}

            // onChange={handleFileChange}
            />
            <FormControl >
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                // value={value}
                onChange={handleChange}
              >
                <div className='divTituloCampo'>
                  <label className='titulocampo'>Vacinas</label>
                  <p>*</p>
                </div>

                <div>
                <FormControlLabel value="v3" control={<Radio />} label="V3" className='labelV3' />
                  <FormControlLabel value="v4" control={<Radio />} label="V4" className='labelV4' />
                  <FormControlLabel value="v5" control={<Radio />} label="V5" className='labelV5' />
                  <FormControlLabel value="v8" control={<Radio />} label="V8" className='labelV38' />
                  <FormControlLabel value="v10" control={<Radio />} label="V10" className='labelV10' />
                  <FormControlLabel value="raiva" control={<Radio />} label="Raiva" className='labelRaiva' />
                  <FormControlLabel value="giárdia" control={<Radio />} label="Giárdia" className='labelGiardia' />
                  <FormControlLabel value="gripe canina" control={<Radio />} label="Gripe canina" className='labelGripeCanina' />
                  <FormControlLabel value="não vacinado" control={<Radio />} label="Não vacinado" className='labelNaoVacinado' />
                  <FormControlLabel value="outro" control={<Radio />} label="Outro" className='labelOutro' />
                </div>
              </RadioGroup>
            </FormControl>

            <FormControl >
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={sexo}
                onChange={handleChange}
              >
                <div className='divTituloCampo'>
                  <label className='titulocampo'>Sexo</label>
                  <p>*</p>
                </div>

                <div>
                  <FormControlLabel value="femea" control={<Radio />} label="Fêmea" className='labelFemea' />
                  <FormControlLabel value="macho" control={<Radio />} label="Macho" className='labelMacho' />
                </div>
              </RadioGroup>
            </FormControl>

            <FormControl >
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={castrado}
                onChange={handleChange}
              >
                <div className='divTituloCampo'>
                  <label className='titulocampo'>Castrado</label>
                  <p>*</p>
                </div>

                <div>
                  <FormControlLabel value="sim" control={<Radio />} label="Sim" className='labelNao' />
                  <FormControlLabel value="nao" control={<Radio />} label="Não" className='labelSim' />
                </div>
              </RadioGroup>
            </FormControl>

            <div className='divTituloCampo'>
              <label className='titulocampo'>Foto do Pet</label>
              <p>*</p>
            </div>

            <label className='tituloFile'>Adicionar foto</label>
            <input type="file" />

            <ButtonEnviar variant="contained" id='botaoEnviar' >Cadastrar</ButtonEnviar>

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

export default AnunciaraAdocao

