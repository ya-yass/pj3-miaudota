import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import PerfilUsuario from './pages/PerfilUsuario'
import Error404 from './pages/Error404'

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<PerfilUsuario />} />
            <Route path="*" element={<Error404 />} />
        </Routes>
    )
}

export default Router