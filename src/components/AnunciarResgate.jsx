import Box from '@mui/material/Box';
import { useState } from 'react';
//modal
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
//formulário
// import ButtonEnviar from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';


import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select'
//imagens e files
import AchadoFoto from './assets/img/achado-foto.png';
import './AnunciarResgate.css'
import logo from './assets/img/miaudota-logo.png'
import { BsXLg as Cancel } from 'react-icons/bs'
import {API_SERVER} from '../config'
import { useNavigate } from 'react-router-dom';


// import CardResgate from './CardResgate';


const AnunciarResgate = () => {

  const [modalOpen, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [bairro, setBairro] = useState(2);

  const navigate = useNavigate()

  const handleChange = (event) => {
    setBairro(event.target.value);
  };


  const handleSubmitResgatado = async (event) => {
    event.preventDefault()
   console.log('Minha funcao de submit perdido')
   const tipo = event.target.tipo.value
   const nome = event.target.nome.value 
   const idade = event.target.idade.value
   const raca = event.target.raca.value
   const sexo = event.target.sexo.value
   const porte = event.target.porte.value
   const foto = event.target.foto.value
   const bairro = event.target.bairro.value
   const descricao = event.target.descricao.value

   const perdido = {tipo, nome, idade, raca, sexo, porte, foto, bairro, descricao}


   try {
    const response = await fetch (`${API_SERVER}/perdido`,
    {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(perdido)
    })
    console.log(perdido)
     const data = await response.json()
     console.log(data)
     setOpen(false)
     navigate('/perdido')
   } catch (error) {
     console.log(error)
   }
 }

  return (
    <Box className='div'>
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
              name="tipo"
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
                <input
                  type="text"
                  placeholder='Digite o nome do pet'
                  className='inputResgate inputNome'
                  name='nome'
                  InputLabelProps={{ shrink: true }}
                  sx={{
                    marginRight: '10px',
                    width:'100px'
                  }}/>
              </div>

              <div className="idadePet">
                <div className='divTituloCampo'>
                  <label className='titulocampo'>Idade</label>
                  <p className='opcional'>(Opcional)</p>
                </div>
                <input type="text" sx={{ width: '157px', marginRight: '10px', }}
                    placeholder='Ex: 4 meses'
                    name='idade'
                    className='inputResgate inputIdade'
                    InputLabelProps={{ shrink: true }}/>
              </div>

              <div className="RacaPet">
                <div className='divTituloCampo'>
                  <label className='titulocampo'>Raça</label>
                  <p className='opcional'>(Opcional)</p>
                </div>
                <input type="text" placeholder='Ex: Sem raça'
                  name='raca'
                  className='inputResgate inputRaca'
                  InputLabelProps={{ shrink: true }}
                />
              </div>
            </div>

            <div className='sobrePet'>
              <div className="divTituloCampo">
                <label className='titulocampo'>Sobre o pet</label>
                <p>*</p>
              </div>
              <textarea name="descricao" rows="6" type="text" className='inputAdocao inputDescricao' InputLabelProps={{ shrink: true }} placeholder='Ex: Encontrei esse cachorro próximo do supermercado Silva Indaía, estava assustado tentando atravessar a rua, ainda estava com a guia de passeio.' />
            </div>

            <FormControl >
              <RadioGroup
                name="sexo"
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
                name="porte">
                  
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

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Bairros</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="bairro"
              label="Bairros"
              value={bairro}
              onChange={handleChange}
              >
              <MenuItem value={1}>Balneário California</MenuItem>
              <MenuItem value={2}>Balneário Copacabana</MenuItem>
              <MenuItem value={3}>Balneário Golfinhos</MenuItem>
              <MenuItem value={4}>Balneário Forest</MenuItem>
              <MenuItem value={5}>Balneário Recando do Sol</MenuItem>
              <MenuItem value={6}>Barranco Alto</MenuItem>
              <MenuItem value={7}>Benfica</MenuItem>
              <MenuItem value={8}>Canta Galo</MenuItem>
              <MenuItem value={9}>Capricórnio</MenuItem>
              <MenuItem value={10}>Caputera</MenuItem>
              <MenuItem value={11}>Centro</MenuItem>
              <MenuItem value={12}>Cidade Jardim</MenuItem>
              <MenuItem value={13}>Costa Nova</MenuItem>
              <MenuItem value={14}>Delfim Verde</MenuItem>
              <MenuItem value={15}>Estrela D'Alva</MenuItem>
              <MenuItem value={16}>Getuba</MenuItem>
              <MenuItem value={17}>Indaiá</MenuItem>
              <MenuItem value={18}>Ipiranga</MenuItem>
              <MenuItem value={19}>Itaúna</MenuItem>
              <MenuItem value={20}>Jaraguá</MenuItem>
              <MenuItem value={21}>Jaraguazinho</MenuItem>
              <MenuItem value={22}>Jardim Aruan</MenuItem>
              <MenuItem value={23}>Jardim Britânia</MenuItem>
              <MenuItem value={24}>Jardim Califórnia</MenuItem>
              <MenuItem value={25}>Jardim Capricórnio</MenuItem>
              <MenuItem value={26}>Jardim Casa Branca</MenuItem>
              <MenuItem value={27}>Jardim das Gaivotas</MenuItem>
              <MenuItem value={28}>Jardim Jaqueira</MenuItem>
              <MenuItem value={29}>Jardim Manari</MenuItem>
              <MenuItem value={30}>Jardim Mariella</MenuItem>
              <MenuItem value={31}>Jardim Maristela</MenuItem>
              <MenuItem value={32}>Jardim Olaria</MenuItem>
              <MenuItem value={33}>Jardim Primavera</MenuItem>
              <MenuItem value={34}>Jardim Rio Santos</MenuItem>
              <MenuItem value={35}>Jardim Santa Rosa</MenuItem>
              <MenuItem value={36}>Jardim Tarumãs</MenuItem>
              <MenuItem value={37}>Jardim Terralão</MenuItem>
              <MenuItem value={38}>Mar Azul</MenuItem>
              <MenuItem value={39}>Martim de Sá</MenuItem>
              <MenuItem value={40}>Massaguaçu</MenuItem>
              <MenuItem value={41}>Mirante da Orla</MenuItem>
              <MenuItem value={42}>Morro do Algodão</MenuItem>
              <MenuItem value={43}>Park Imperial</MenuItem>
              <MenuItem value={44}>Parque Balneário Poiares</MenuItem>
              <MenuItem value={45}>Pegorelli</MenuItem>
              <MenuItem value={46}>Perequê Mirim</MenuItem>
              <MenuItem value={47}>Poiares</MenuItem>
              <MenuItem value={48}>Pontal de Santa Marina</MenuItem>
              <MenuItem value={49}>Ponte Seca</MenuItem>
              <MenuItem value={50}>Portal da Fazendinha</MenuItem>
              <MenuItem value={51}>Porto Novo</MenuItem>
              <MenuItem value={52}>Praia da Cocanha</MenuItem>
              <MenuItem value={53}>Praia da Mococa</MenuItem>
              <MenuItem value={54}>Praia das Palmeiras</MenuItem>
              <MenuItem value={55}>Prainha</MenuItem>
              <MenuItem value={56}>Recanto Som do Mar</MenuItem>
              <MenuItem value={57}>Rio Claro</MenuItem>
              <MenuItem value={58}>Rio do Ouro</MenuItem>
              <MenuItem value={59}>Sumaré</MenuItem>
              <MenuItem value={60}>Tabatinga</MenuItem>
              <MenuItem value={61}>Tinga</MenuItem>
              <MenuItem value={62}>Travessão</MenuItem>
              <MenuItem value={63}>Vapapesca</MenuItem>
              <MenuItem value={64}>Vila Nossa Senhora Aparecida</MenuItem>
              <MenuItem value={65}>Vila Ponte Seca</MenuItem>
            </Select>
          </FormControl>

          <div className='BtnImagens'>
            <div className=' btnFotoAdocao'>
              <div className='divTituloCampo'>
                <label className='titulocampo'>Foto do pet</label>
              </div>
              <textarea
                rows="1" type="text"
                placeholder='Insira uma URL válida'
                className='inputAdocao inputFotoPet'
                name='foto'
                InputLabelProps={{ shrink: true }}
                sx={{
                  marginRight: '10px',
                  width:'257%',
                  marginBottom:'30px'
                }}
              />
            </div>
          </div>

            <div className="divBtnCadastrarAdocao">
              <button className='btnAnunciarResgate' variant="contained" type='submit' >Anunciar</button>
            </div>

          </Typography>
          </form>
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

export default AnunciarResgate

