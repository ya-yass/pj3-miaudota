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
import Autocomplete from '@mui/material/Autocomplete';
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

  const [sexoPet, setValue1] = React.useState('');
  const [tipoPet, setValue2] = React.useState('');
  const [portePet, setValue3] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
    setValue1(event.target.tipoPet);
    setValue2(event.target.sexoPet);
    setValue3(event.target.portePet);
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
          <Typography id="modal-modal-title" component="div">
            <img src={logo} className='logoModal' alt='Logo do Modal'></img>
            <div>
              <h3>Encontrei um pet</h3>
              <p>Anuncie um pet que você encontrou perdido na rua para que ele volte ao lar. </p>
            </div>
          </Typography>

          {/* teste */}

          <FormControl >
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="tipoPet"
              value={tipoPet}
              onChange={handleChange}
            >
              <label className='titulocampo'>Qual o animal você encontrou?</label>
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
            <div className='divTituloCampo tituloCampoNome'>
              <label className='titulocampoNome'>Idade</label>
              <p>(Opcional)</p>
            </div>
            <TextField
              sx={{ marginTop: '15px' }}
              placeholder='Ex: 4 meses'
              type="text"
              className='input'

              InputLabelProps={{ shrink: true }}

            // onChange={handleFileChange}
            />

            <div className='divTituloCampo tituloCampoNome'>
              <label className='titulocampoNome'>Raça</label>
              <p>(Opcional)</p>
            </div>
            <TextField
              sx={{ marginTop: '15px' }}
              placeholder='Ex: Sem Raça'
              type="text"
              className='input'

              InputLabelProps={{ shrink: true }}

            // onChange={handleFileChange}
            />

            <FormControl >
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="sexoPet"
                value={sexoPet}
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
                name="portePet"
                value={portePet}
                onChange={handleChange}
              >
                <div className='divTituloCampo'>
                  <label className='titulocampo'>Porte</label>
                  <p>*</p>
                </div>

                <div>
                  <FormControlLabel value="pequeno" control={<Radio />} label="Pequeno" className='labelPequeno' />
                  <FormControlLabel value="medio" control={<Radio />} label="Médio" className='labelMedio' />
                  <FormControlLabel value="grande" control={<Radio />} label="Grande" className='labelGrande' />
                </div>
              </RadioGroup>
            </FormControl>


            <div className='divTituloCampo'>
              <label className='titulocampo'>Foto do Pet</label>
              <p>*</p>
            </div>

            <label className='tituloFile'>Adicionar foto</label>
            <input type="file" />

            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={bairros}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Bairros" />}
            />

            <ButtonEnviar variant="contained" id='botaoEnviar' >Cadastrar</ButtonEnviar>

          </Typography>
        </Box>
      </Modal>

    </Box>
  )
}

const bairros = [
  { label: 'Balneário California' },
  { label: 'Balneário Copacabana' },
  { label: 'Balneário Golfinhos' },
  { label: 'Balneário Forest' },
  { label: 'Balneário Recando do Sol' },
  { label: 'Barranco Alto' },
  { label: 'Benfica' },
  { label: 'Canta Galo' },
  { label: 'Capricónio' },
  { label: 'Caputera' },
  { label: 'Centro' },
  { label: 'Cidade Jardim' },
  { label: 'Costa Nova' },
  { label: 'Delfim Verde' },
  { label: "Estrela D'Alva" },
  { label: 'Getuba' },
  { label: 'Indaiá' },
  { label: 'Ipiranga' },
  { label: 'Itaúna' },
  { label: 'Jaraguá' },
  { label: 'Jaraguazinho' },
  { label: 'Jardim Aruan' },
  { label: 'Jardim Britânia' },
  { label: 'Jardim Califórnia' },
  { label: 'Jardim Capricórnio' },
  { label: 'Jardim Casa Branca' },
  { label: 'Jardim das Gaivotas' },
  { label: 'Jardim Jaqueira' },
  { label: 'Jardim Manari' },
  { label: 'Jardim Mariella' },
  { label: 'Jardim Maristela' },
  { label: 'Jardim Olaria' },
  { label: 'Jardim Primavera' },
  { label: 'Jardim Rio Santos' },
  { label: 'Jardim Santa Rosa' },
  { label: 'Jardim Tarumãs' },
  { label: 'Jardim Terralão' },
  { label: 'Mar Azul' },
  { label: 'Martim de Sá' },
  { label: 'Massaguaçu' },
  { label: 'Mirante da Orla' },
  { label: 'Morro do Algodão' },
  { label: 'Park Imperial' },
  { label: 'Parque Balneário Poiares' },
  { label: 'Pegorelli' },
  { label: 'Perequê Mirim' },
  { label: 'Poiares' },
  { label: 'Pontal de Santa Marina' },
  { label: 'Ponte Seca' },
  { label: 'Portal da Fazendinha' },
  { label: 'Porto Novo' },
  { label: 'Praia da Cocanha' },
  { label: 'Praia da Mococa' },
  { label: 'Praia das Palmeiras' },
  { label: 'Prainha' },
  { label: 'Recanto Som do Mar' },
  { label: 'Rio Claro' },
  { label: 'Rio do Ouro' },
  { label: 'Sumaré' },
  { label: 'Tabatinga' },
  { label: 'Tinga' },
  { label: 'Travessão' },
  { label: 'Vapapesca' },
  { label: 'Vila Nossa Senhora Aparecida' },
  { label: 'Vila Ponte Seca' },
];

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

