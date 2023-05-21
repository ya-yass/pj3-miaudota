import { create } from 'zustand'

const useAuthStore = create((set) => ({
    isLogged: false,
    token: '',
    fotoperfil: '',
    fotocapa: '',
    nome: '',
    usuario: '',
    email: '',
    idade: '',
    qtdanimais: '',
    roles: '',
  login: (token, user) => set({ isLogged: true, token: token, fotoperfil: user.fotoperfil, fotocapa: user.fotocapa, nome: user.nome, usuario: user.usuario, email: user.email, idade: user.idade, qtdanimais: user.qtdanimais, roles: user.roles }),
  logout: () => set({ isLogged: false, token: '', fotoperfil: '', fotocapa: '', nome: '', usuario: '', email: '', idade: '', qtdanimais: '', roles: ''}),
}))

export default useAuthStore