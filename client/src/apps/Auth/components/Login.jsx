import {useState} from "react";
import {obtenerTokens} from "../services/auth.apis.js";
import Loading from "../../../components/Loading.jsx";
import sesionStore from "../../../store/sesion.store.js";
import {errorMessage, successMessage} from "../../../components/messages.js";
import {RedirectToHome} from "../../../hooks/SesionHooks.jsx";

const Login = () => {
    document.title = 'Iniciar sesión - InvTec'
    RedirectToHome()

    const saveTokens = sesionStore((state) => state.guardarTokens)
    const [data, setData] = useState({
        username: '',
        password: ''
    });
    const [loading, setLoading] = useState(false)

    const handleSubmit =
        async (e) => {
            setLoading(true)
            e.preventDefault();
            await obtenerTokens(data)
                .then((Response) => {
                    saveTokens(Response.data)
                    successMessage('Bienvenido', 'La sesión se ha iniciado correctamente')
                }).catch((error) => {
                    errorMessage(error.response.data)
                })
                .finally(() => {
                    setLoading(false)
                })
        }
    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    }
    return (
        <>
            <div className="card-header">Iniciar sesión</div>
            <div className="card-body">
                <div className="card-title">
                    Ingrese sus credenciales para iniciar.
                </div>
                {loading ?
                    <>
                        <Loading/>
                    </> : (
                        <>
                            <form onSubmit={handleSubmit}>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingInput"
                                           placeholder="name@example.com"
                                           name="username" required onChange={handleChange}/>
                                    <label htmlFor="floatingInput">Nombre de usuario <i
                                        className="bi bi-person-badge"></i></label>
                                </div>
                                <div className="form-floating">
                                    <input type="password" className="form-control" id="floatingPassword"
                                           placeholder="Password"
                                           name="password" required onChange={handleChange}/>
                                    <label htmlFor="floatingPassword">Contraseña <i
                                        className="bi bi-key-fill"></i></label>
                                </div>
                                <br/>
                                <button type="submit" className="btn btn-primary">Entrar <i
                                    className="bi bi-arrow-right"></i>
                                </button>
                            </form>
                        </>
                    )}
            </div>
        </>
    )
}

export default Login