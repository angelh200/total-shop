import logo from '../logo.svg';
import React  from "react";

class NavBar extends React.Component {
    render() {
        return <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="" width="30" height="24"
                         className="d-inline-block align-text-top"/>
                        Total Shop
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse ml-4" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                               data-bs-toggle="dropdown" aria-expanded="false">
                                Categorías
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Teclados</a></li>
                                <li><a className="dropdown-item" href="#">Pantallas</a></li>
                                <li><a className="dropdown-item" href="#">Mouse</a></li>
                                <li><a className="dropdown-item" href="#">Tarjetas Gráficas</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Nosotros</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contactanos</a>
                        </li>
                    </ul>
                    <form className="container-fluid d-flex justify-content-start">
                        <button className="btn ms-auto btn-danger" type="button">Login</button>
                    </form>
                </div>
            </div>
        </nav>;
    }
}

export default NavBar;