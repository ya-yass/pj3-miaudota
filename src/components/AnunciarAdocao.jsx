import Box from '@mui/material/Box';
//modal
import * as React from 'react';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
//formulario
import TextField from '@mui/material/TextField';
// import ButtonEnviar from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
//imagens e files
import AdocaoFoto from './assets/img/card-pet-adotar.png'
import logo from './assets/img/miaudota-logo.png'
// import './EncontreiUmPet.css'
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

        <button className="cardAdocao" onClick={handleOpen}>
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
            <img src={logo} className='logoModal' alt='MiauDota'></img>
            <div>
              <h3 className='tituloModal'>COLOQUE PARA ADOÇÃO</h3>
              <span className='informativo'>Nos ajude, tente ser específico nos campos do formulário para facilitar a adoção do pet.</span>
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

              <div className='radioBtn'>
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

            <div className="camposTextos">

              <div className="nomePet">
                <div className='divTituloCampo'>
                  <label className='titulocampo'>Nome</label>
                  <p>*</p>
                </div>
                <TextField
                  placeholder='Digite aqui o nome do pet'
                  type="text"
                  className='inputAdocao'
                  InputLabelProps={{ shrink: true }}
                  sx={{
                    marginRight: '10px',
                  }}
                // onChange={handleFileChange}
                />
              </div>

              <div className="idadePet">
                <div className='divTituloCampo'>
                  <label className='titulocampo'>Idade</label>
                  <p>*</p>
                </div>
                <TextField
                  sx={{ width: '157px', marginRight: '10px', }}
                  placeholder='Ex: 4 meses'
                  type="text"
                  className='inputAdocao'
                  InputLabelProps={{ shrink: true }}
                // onChange={handleFileChange}
                />
              </div>

              <div className="racaPet">
                <div className='divTituloCampo'>
                  <label className='titulocampo'>Raça</label>
                  <p>*</p>
                </div>
                <TextField
                  placeholder='Ex: Sem raça'
                  type="text"
                  className='inputAdocao'

                  InputLabelProps={{ shrink: true }}

                // onChange={handleFileChange}
                />
              </div>

            </div>

            <div className='sobrePet'>
              <div className="divTituloCampo">
                <label className='titulocampo'>Sobre o pet</label>
                <p>*</p>
              </div>
              <TextField
                sx={{ width: '100%', height: '200px' }}
                placeholder='Ex: O pet é calmo, não tem costume em ficar sozinho em casa, fica assustado com uma grande quantidade de pessoas dentro de casa...'
                type="text"
                className='inputAdocao'

                InputLabelProps={{ shrink: true }}

              // onChange={handleFileChange}
              />
            </div>

            <FormGroup className='vacinasPet'>
              <div className='divTituloCampo'>
                <label className='titulocampo'>Vacinas</label>
                <p>*</p>
              </div>
              <div className="divVacinas">
                <div className="camposVacinas">
                  <FormControlLabel control={<Checkbox />} label="V3" className='labelV3' />
                  <FormControlLabel control={<Checkbox />} label="V4" className='labelV4' />
                </div>

                <div className="camposVacinas">
                  <FormControlLabel control={<Checkbox />} label="V10" className='labelV10' />
                  <FormControlLabel control={<Checkbox />} label="V5" className='labelV5' />

                </div>
                <div className="camposVacinas">
                  <FormControlLabel control={<Checkbox />} label="V8" className='labelV8' />
                  <FormControlLabel control={<Checkbox />} label="Raiva" className='labelRaiva' />
                </div>

                <div className="camposVacinas">
                  <FormControlLabel control={<Checkbox />} label="Giárdia" className='labelGiardia' />
                  <FormControlLabel control={<Checkbox />} label="Gripe canina" className='labelGripeCanina' />
                </div>

                <div className="camposVacinas">
                  <FormControlLabel control={<Checkbox />} label="Não vacinado" className='labelNaoVacinado' />
                  <FormControlLabel control={<Checkbox />} label="Outro" className='labelOutro' />
                </div>
              </div>
            </FormGroup>

            <div>
              <FormControl sx={{ marginRight: '43px' }}>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="sexoAnimal"
                  value={sexo}
                  onChange={handleChange}
                >
                  <div className='divTituloCampo'>
                    <label className='titulocampo'>Sexo</label>
                    <p>*</p>
                  </div>

                  <div className='radioSelect'>
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

                  <div className='radioSelect'>
                    <FormControlLabel value="sim" control={<Radio />} label="Sim" className='labelNao' />
                    <FormControlLabel value="nao" control={<Radio />} label="Não" className='labelSim' />
                  </div>
                </RadioGroup>
              </FormControl>
            </div>

            <div className='BtnImagens'>
              <div className=' btnFotoAdocao'>
                <div className='divTituloCampo'>
                  <label className='titulocampo'>Foto de Perfil</label>
                </div>
                <label className='tituloFile'>Adicionar foto</label>
                <input type="file" />
              </div>
            </div>

            <div className="divBtnCadastrarAdocao">
              <button className='btnCadastrarAdocao' variant="contained" >Cadastrar</button>
            </div>



            {/* <ButtonEnviar variant="contained" id='botaoEnviar' >Cadastrar</ButtonEnviar> */}
          </Typography>
        </Box>
      </Modal >
    </Box >
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

