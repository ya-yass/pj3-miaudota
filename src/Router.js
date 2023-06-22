import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import PerfilUsuario from './pages/PerfilUsuario'
import Error404 from './pages/Error404'
import Adocao from './pages/Adocao'
import CadastroPet from './pages/CadastroPet'
import Resgatados from './pages/Resgatados'

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<PerfilUsuario />} />
            <Route path="*" element={<Error404 />} />
            <Route path="/adocao" element={<Adocao />} />
            <Route path="/cadastrar-pet" element={<CadastroPet />} />
            <Route path="/perdido" element={<Resgatados />} />
        </Routes>
    )
}

export default Router