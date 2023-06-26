import Box from '@mui/material/Box';
//modal
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
//formulario
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import { API_SERVER } from "../config";
import { useState } from 'react';

//imagens e files
import AdocaoFoto from './assets/img/card-pet-adotar.png'
import logo from './assets/img/miaudota-logo.png'
// import './AnunciarResgate.css'
import { BsXLg as Cancel } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';



const AnunciaraAdocao = () => {
  const [modalOpen, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate()

  const handleSubmitAdotado = async (event) => {
    event.preventDefault()
   console.log('função de submit adoção')
   const nome = event.target.nome.value 
   const foto = event.target.foto.value
   const idade = event.target.idade.value
   const sexo = event.target.sexo.value
   const descricao = event.target.descricao.value
   const castrado = event.target.castrado.value
   const raca = event.target.raca.value
   const tipo = event.target.tipo.value
   const adocao = {nome, foto, idade, sexo, descricao, castrado, raca, tipo }
   try {
     const response = await fetch(`${API_SERVER}/adocao`,
     {
       method: 'POST',
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify(adocao), 
     })
     const data = await response.json()
     console.log(data)
     setOpen(false)
     navigate('/adocao')
   } catch (error) {
     console.log(error)
   }
 }

  return (
    <Box className='div'>
      <div className='cards'>

        <button className="cardAdocao" onClick={handleOpen}>
          <div className='mask'></div>
          <p>Colocar um pet para adoção</p>
          <img src={AdocaoFoto} alt="Anuncie um animal para adoção" className='imagemPet imagemPetEncontrado ' />
        </button>
      </div>

      <Modal
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">

        <Box sx={styles.Modal}>
          <Cancel className='botaoCancelModal' onClick={handleClose} />

        <form onSubmit={handleSubmitAdotado}>

          <Typography id="modal-modal-title" component="div">
            <img src={logo} className='logoModal' alt='MiauDota'></img>
            <div>
              <h3 className='tituloModal'>COLOQUE PARA ADOÇÃO</h3>
              <span className='informativo'>Nos ajude, tente ser específico nos campos do formulário para facilitar a adoção do pet.</span>
            </div>
          </Typography>

          <hr />

          <FormControl >
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="tipo"
            >
              <div className='divTituloCampo'>
                <label className='titulocampo'>Qual animal você está anunciando?</label>
                <p>*</p>
              </div>

              <div className='radioBtn'>
                <FormControlLabel value="cachorro" control={<Radio />} label="Cachorro" className='labelCachorro' />
                {/* TODO definir um valor para cachorro e gato para filtrar na página */}
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
                  name='nome'
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
                  name='idade'
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
                  name='raca'
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
                name='descricao'
                className='inputAdocao'

                InputLabelProps={{ shrink: true }}

              // onChange={handleFileChange}
              />
            </div>

            <div>
              <FormControl sx={{ marginRight: '43px' }}>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name='sexo'
                >
                  <div className='divTituloCampo'>
                    <label className='titulocampo'>Sexo</label>
                    <p>*</p>
                  </div>

                  <div className='radioSelect'>
                    <FormControlLabel value="femea" name='sexo' control={<Radio />} label="Fêmea" className='labelFemea' />
                    <FormControlLabel value="macho" name='sexo' control={<Radio />} label="Macho" className='labelMacho' />
                  </div>
                </RadioGroup>
              </FormControl>

              <FormControl >
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name='castrado'
                >
                  <div className='divTituloCampo'>
                    <label className='titulocampo'>Castrado</label>
                    <p>*</p>
                  </div>

                  <div className='radioSelect'>
                    <FormControlLabel value="sim" name='castrado' control={<Radio />} label="Sim" className='labelNao' />
                    <FormControlLabel value="nao" name='castrado' control={<Radio />} label="Não" className='labelSim' />
                  </div>
                </RadioGroup>
              </FormControl>
            </div>

            <div className='BtnImagens'>
              <div className=' btnFotoAdocao'>
                <div className='divTituloCampo'>
                  <label className='titulocampo'>Foto do pet</label>
                </div>
                <TextField
                  placeholder='Insira uma URL válida'
                  type="text"
                  className='inputAdocao'
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
              <button className='btnCadastrarAdocao' variant="contained" >Cadastrar</button>
            </div>



            {/* <ButtonEnviar variant="contained" id='botaoEnviar' >Cadastrar</ButtonEnviar> */}
          </Typography>
          </form>
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

