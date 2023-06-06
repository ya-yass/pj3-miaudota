import Box from '@mui/material/Box';
//modal
import * as React from 'react';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
//formulário
import TextField from '@mui/material/TextField';
// import ButtonEnviar from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Autocomplete from '@mui/material/Autocomplete';
//imagens e files
import AchadoFoto from './assets/img/achado-foto.png';
import './AnunciarResgate.css'
import logo from './assets/img/miaudota-logo.png'
import { BsXLg as Cancel } from 'react-icons/bs'



const AnunciarResgate = () => {

  const [modalOpen, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [sexoAnimalResgate, setValue1] = React.useState('');
  const [tipoAnimalResgate, setValue2] = React.useState('');
  const [portePetResgate, setValue3] = React.useState('');

  const handleChange = (event) => {
    // setValue(event.target.value);
    setValue1(event.target.tipoAnimalResgate);
    setValue2(event.target.sexoAnimalResgate);
    setValue3(event.target.portePetResgate);
  };

  const handleSubmitResgatado = async (event) => {
    event.preventDefault()
   console.log('Minha funcao de submit')
   const tipo = event.target.tipo.value
   const nome = event.target.nome.value 
   const idade = event.target.idade.value
   const raca = event.target.raca.value
   const sexo = event.target.sexo.value
   const porte = event.target.porte.value
   const foto = event.target.foto.value
  //  const bairro = event.target.bairro.value
  // TODO resolver o problema de bibilioteca de autocomplete
   const descricao = event.target.descricao.value

   const perdido = {tipo, nome, idade, raca, sexo, porte, foto, descricao}
   try {
     const response = await fetch('http://localhost:3100/perdido',
     {
       method: 'POST',
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify(perdido), 
     })
     const data = await response.json()
     console.log(data)
     setOpen(false)
   } catch (error) {
     console.log(error)
   }
 }


  return (
    <Box>
      <div className='cards'>

        <button className="cardEncontrei" onClick={handleOpen}>
          <div className='mask'></div>
          <p>Encontrei um <br /> pet</p>
          <img src={AchadoFoto} alt="Anuncie um animal para adoção" className='imagemPet ' />
        </button>
      </div>

      <Modal
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">

        <Box sx={styles.Modal}>
          <Cancel className='botaoCancelModal' onClick={handleClose} />

          <form onSubmit={handleSubmitResgatado}>

          <Typography id="modal-modal-title" component="div">
            <img src={logo} className='logoModal' alt='MiauDota'></img>
            <div>
              <h3 className='tituloModal'>Encontrei um pet</h3>
              <span className='informativo'>Nos ajude, tente ser específico nos campos do formulário para facilitar a adoção do pet.</span>
            </div>
          </Typography>

          <hr />

          <FormControl >
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="tipo"
              value={tipoAnimalResgate}
              onChange={handleChange}
            >
              <div className='divTituloCampo'>
                <label className='titulocampo'>Qual animal você encontrou?</label>
                <p>*</p>
              </div>

              <div className='radioBtn'>
                <FormControlLabel  value="cachorro" name='tipo' control={<Radio />} label="Cachorro" className='labelCachorro' />

                <FormControlLabel value="gato" name='tipo' className='labelGato' control={<Radio />} label="Gato" />
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
                  <p className='opcional'>(Opcional)</p>

                </div>
                <TextField
                  placeholder='Digite aqui o nome do pet'
                  type="text"
                  name='nome'
                  className='inputResgate'
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
                  <p className='opcional'>(Opcional)</p>

                </div>
                <TextField
                  placeholder='Ex: aproximadamente 3 meses'
                  type="text"
                  className='inputResgate'
                  name='idade'
                  InputLabelProps={{ shrink: true }}
                  sx={{
                    marginRight: '10px',
                  }}
                // onChange={handleFileChange}
                />
              </div>

              <div className="RacaPet">
                <div className='divTituloCampo'>
                  <label className='titulocampo'>Raça</label>
                  <p className='opcional'>(Opcional)</p>

                </div>
                <TextField
                  placeholder='Ex: sem raça'
                  type="text"
                  name='raca'
                  className='inputResgate'
                  InputLabelProps={{ shrink: true }}
                  sx={{
                    marginRight: '10px',
                  }}
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
                placeholder='Encontrei esse cachorro próximo do supermercado Silva Indaía, estava assustado tentando atravessar a rua, ainda estava com a guia de passeio.'
                name='descricao'
                type="text"
                className='inputAdocao'

                InputLabelProps={{ shrink: true }}

              // onChange={handleFileChange}
              />
            </div>

            <FormControl >
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                value={sexoAnimalResgate}
                onChange={handleChange}
              >
                <div className='divTituloCampo'>
                  <label className='titulocampo'>Sexo</label>
                  <p>*</p>
                </div>

                <div>
                  <FormControlLabel value="femea" name="sexo" control={<Radio />} label="Fêmea" className='labelFemea' />
                  <FormControlLabel value="macho" name="sexo" control={<Radio />} label="Macho" className='labelMacho' />
                </div>
              </RadioGroup>
            </FormControl>

            <FormControl >
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                value={portePetResgate}
                onChange={handleChange}
              >
                <div className='divTituloCampo'>
                  <label className='titulocampo'>Porte</label>
                  <p>*</p>
                </div>

                <div className='radioSelect'>
                  <FormControlLabel value="pequeno" control={<Radio />} label="Pequeno" name="porte" className='labelPequeno' />
                  <FormControlLabel value="medio" control={<Radio />} label="Médio" name="porte" className='labelMedio' />
                  <FormControlLabel value="grande" name="porte" control={<Radio />} label="Grande" className='labelGrande' />
                </div>
              </RadioGroup>
            </FormControl>

            {/* <div className="bairroPet">
              <div className='divTituloCampo'>
                <label className='titulocampo'>Bairro onde o animal foi encontrado</label>
                <p>*</p>
              </div>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                className='inputResgate'
                options={bairros}
                name='bairro'
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Bairros" />}
              />
            </div> */}

            <div className='BtnImagens'>
              <div className=' btnFotoResgate'>
                <div className='divTituloCampo'>
                  <label className='titulocampo'>Foto de Perfil</label>
                </div>
                <TextField
                  placeholder='Insira uma URL válida'
                  type="text"
                  className='inputResgate'
                  name='foto'
                  InputLabelProps={{ shrink: true }}
                  sx={{
                    marginRight: '10px',
                  }}
                // onChange={handleFileChange}
                />
              </div>
            </div>

            <div className="divBtnCadastrarAdocao">
              <button className='btnAnunciarResgate' variant="contained" >Anunciar</button>
            </div>

          </Typography>
          </form>
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

export default AnunciarResgate

