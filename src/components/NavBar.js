import { Link, NavLink } from 'react-router-dom';
import logo from '../logo.svg';
import React  from "react";
import CartWidget from "./CartWidget";

const NavBar = ({ links }) => {

    function hasSubcategories(link) {
        return link.url.length > 1;
    }

    // Funcion que devuelve la estructura correcta dependiendo de si el link tiene subcategorias
    function mapLink(link) {
        if(!hasSubcategories(link)) {
            return (
                <li key={link.name} className="nav-item">
                    <NavLink to={link.url[0]} activeclassname="active" className="nav-link">{link.name}</NavLink>
                </li>
            );
        } else {
            return (
                <li key={link.name} className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                       data-bs-toggle="dropdown" aria-expanded="false">
                        {link.name}
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        {link.url.map((sublink) => {
                            return (
                                <li key={sublink.name}>
                                    <NavLink to={sublink.url[0]} activeclassname="active" className="dropdown-item">{sublink.name}</NavLink>
                                </li>
                            );
                        })}
                    </ul>
                </li>
            );
        }
    }

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link to='/' className="navbar-brand">
                        <img src={logo} alt="" width="30" height="24"
                             className="d-inline-block align-text-top"/>
                        Total Shop
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse ml-4" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {links.map(mapLink)}
                        </ul>
                        <form className="container-fluid d-flex justify-content-end">
                            <CartWidget/>
                            <button className="btn btn-danger" type="button">Login</button>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    );
};


export default NavBar;