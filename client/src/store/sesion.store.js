import {create} from 'zustand'

const sesionStore = create((set) => ({
        PAT: null,
        RAT: null,
        isAuth: false,
        userData: {},
        guardarTokens: (data) => set({PAT: data.access, RAT: data.refresh, isAuth: true}),
        guardarDatosUsuario: (data) => ({userData: data}),
        destruirSesion: () => ({PAT: null, RAT: null, isAuth: false, userData: {}})
    })
)

export default sesionStore