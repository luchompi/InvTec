import sesionStore from "../store/sesion.store.js";
import {Link} from "react-router-dom";
import {successMessage} from "./messages.js";

const Navbar = ({dateTime}) => {
    const {isAuth} = sesionStore.getState()
    const cerrar = sesionStore((state) => state.destruirSesion)

    const salir = () => {
        successMessage('Sesión finalizada', 'La sesión ha finalizado correctamente')
        cerrar()
        location.reload()
    }
    return (
        <>
            <nav className="py-2 bg-body-tertiary border-bottom">
                <div className="container d-flex flex-wrap">
                    <ul className="nav me-auto">
                        {isAuth ? (
                            <>
                                <li className="nav-item"><a href="#" className="nav-link link-body-emphasis px-2 active"
                                                            aria-current="page">Home</a></li>
                                <li className="nav-item"><a href="#"
                                                            className="nav-link link-body-emphasis px-2">Features</a>
                                </li>
                                <li className="nav-item"><a href="#"
                                                            className="nav-link link-body-emphasis px-2">Pricing</a>
                                </li>
                                <li className="nav-item"><a href="#"
                                                            className="nav-link link-body-emphasis px-2">FAQs</a>
                                </li>
                                <li className="nav-item"><a href="#"
                                                            className="nav-link link-body-emphasis px-2">About</a>
                                </li>
                            </>
                        ) : (<></>)}
                    </ul>

                    <ul className="nav">
                        {isAuth ? (
                            <>
                                <div className="dropdown-center">
                                    <button className="btn btn-secondary dropdown-toggle" type="button"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                        Sesión iniciada correctamente
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Action two</a></li>
                                        <li><a className="dropdown-item" onClick={salir}>Salir <i
                                            className="bi bi-power"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </>
                        ) : (
                            <>
                                <li className="nav-item"><Link to={'/login'}
                                                               className="nav-link link-body-emphasis px-2">Login</Link>
                                </li>
                                <li className="nav-item"><a href="#" className="nav-link link-body-emphasis px-2">Sign
                                    up</a>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </nav>
            <header className="py-3 mb-4 border-bottom">
                <div className="container d-flex flex-wrap justify-content-center">
                    <a href="/"
                       className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto link-body-emphasis text-decoration-none">

                        <span className="fs-4">InvTec <i className="bi bi-boxes"></i></span>
                    </a>
                    <form className="col-12 col-lg-auto mb-3 mb-lg-0">
                        <input type="text" className="form-control" value={dateTime} readOnly/>
                    </form>
                </div>
            </header>
        </>
    );

}

export default Navbar