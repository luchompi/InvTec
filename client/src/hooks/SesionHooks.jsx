import sesionStore from "../store/sesion.store.js";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

export const RedirectToHome = () => {
    const {isAuth} = sesionStore.getState()
    const navigate = useNavigate()
    useEffect(() => {
        setInterval(() => {
            isAuth ? navigate('/') : navigate(null)
        }, 1000)
    }, [isAuth])
    return <div/>
}

export const RedirectToLogin = () => {
    const {isAuth} = sesionStore.getState()
    const navigate = useNavigate()
    useEffect(() => {
        isAuth ? navigate(null) : navigate('/login')
    })
    return <div/>
}