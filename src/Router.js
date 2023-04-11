import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import PerfilUsuario from './pages/PerfilUsuario'
import Error404 from './pages/Error404'
import Adocao from './pages/Adocao'

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<PerfilUsuario />} />
            <Route path="*" element={<Error404 />} />
            <Route path="/adocao" element={<Adocao />} />
        </Routes>
    )
}

export default Router