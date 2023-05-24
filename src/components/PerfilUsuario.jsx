import Box from '@mui/material/Box';
//Modal
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import * as React from 'react';
//formulário
import TextField from '@mui/material/TextField';
// import ButtonEnviar from '@mui/material/Button';

//componentes e files
import CardPetPerfil from '../components/CardPetPerfil'
import './PerfilUsuario.css'
//imagens e icones
import logo from './assets/img/miaudota-logo.png'
import capaexemplo from './assets/img/capaexemplo.png'
import fotoperfil from './assets/img/fotoperfil.png'
import { FaPaw as Raca } from 'react-icons/fa'
import { BsXLg as Cancel } from 'react-icons/bs'


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
        <div className='infoNameUserIcon'>
          <div className='editarENome'>

            <h2 className='nomeusuario'>Maria Fabris</h2>
            <button style={styles.Button} onClick={handleOpen} >Editar</button>
          </div>

          <div className='userAndPet'>
            <p>@mariafabris</p>
            <div className='iconPet'>
              <Raca />
              <p>1</p>
            </div>
          </div>
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">

        <Box sx={styles.Modal} className='selecionaTudo'>
          <Cancel className='botaoCancelModal' onClick={handleClose} />
          <Typography id="modal-modal-title">
            <img src={logo} className='logoModal' alt='MiauDota'></img>
          </Typography>
          <div>
            <h3 className='tituloModal'>Editar Perfil</h3>
          </div>
          <hr />

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

            <div className='BtnImagens'>
              <div className=' botãoFotoPerfil'>
                <div className='divTituloCampo'>
                  <label className='titulocampo'>Foto de Perfil</label>
                </div>
                <label className='tituloFile'>Adicionar foto</label>
                <input type="file" />
              </div>

              <div className='botãoCapaPerfil'>
                <div className='divTituloCampo'>
                  <label className='titulocampo'>Foto de capa</label>
                </div>
                <label className='tituloFile'>Adicionar foto</label>
                <input type="file" />
              </div>
            </div>

            <div className='editarNomeUser'>
              <div className="nomeUsuarioEditar">
                <div className='divTituloCampo'>
                  <label className='titulocampo'>Nome</label>
                </div>
                <TextField
                  placeholder='Nome e sobrenome'
                  type="text"
                  className='inputEditarPerfil'
                  InputLabelProps={{ shrink: true }}
                  sx={{
                    marginRight: '10px',
                  }}
                // onChange={handleFileChange}
                />
              </div>

              <div className="userUsuario">
                <div className='divTituloCampo'>
                  <label className='titulocampo'>Usuário</label>
                </div>
                <TextField
                  placeholder='@user123'
                  type="text"
                  className='inputEditarPerfil'
                  InputLabelProps={{ shrink: true }}
                  sx={{
                    marginRight: '10px',
                    width: '100%',
                  }}
                // onChange={handleFileChange}
                />
              </div>

            </div>

            <div className="editarEmailUsuario">
              <div className='divTituloCampo'>
                <label className='titulocampo'>E-mail</label>
              </div>
              <TextField
                placeholder='email@domain.com'
                type="text"
                className='inputEditarPerfil'
                InputLabelProps={{ shrink: true }}
                sx={{
                  width: '100%',
                }}
              // onChange={handleFileChange}
              />
            </div>

            <div className="editarSenhaUsuario">
              <div className='divTituloCampo'>
                <label className='titulocampo'>Senha</label>
              </div>
              <TextField
                placeholder='******'
                type="password"
                className='inputEditarPerfil'
                InputLabelProps={{ shrink: true }}
                sx={{
                  width: '100%',
                }}
              // onChange={handleFileChange}
              />
            </div>


            <div className='editarIdadeEAnimais'>

              <div className='IdadeUsuario'>
                <div className='divTituloCampo '>
                  <label className='titulocampo'>Idade</label>
                </div>
                <TextField
                  sx={{ marginTop: '-10px' }}
                  placeholder='Ex 23'
                  type="text"
                  id='idadeCampo'

                  InputLabelProps={{ shrink: true }}

                // onChange={handleFileChange}
                />
              </div>
              <div className='QtdAnimais'>
                <div className='divTituloCampo '>
                  <label className='titulocampo'>Quantos animais?</label>
                </div>
                <TextField
                  sx={{ marginTop: '-10px' }}
                  placeholder='03'
                  type="text"
                  id='qtdAnimaisCampo'

                  InputLabelProps={{ shrink: true }}

                // onChange={handleFileChange}
                />
              </div>

            </div>


            <div className='BotoesModal'>
              <button className='btnCadastrarAdocao' variant="contained" >Cadastrar</button>

              {/* <ButtonEnviar variant="contained" id='botaoEnviar' >Editar</ButtonEnviar> */}
              <p className='botãoCancelarEditar' onClick={handleClose} >Cancelar</p>
            </div>

          </Typography>
        </Box>
      </Modal>

      <CardPetPerfil />

    </Box>
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
  },
}

export default PerfilUsuario