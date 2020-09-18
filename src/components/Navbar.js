import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from "../logo.png";



class Navbar extends Component {
    render() {
        return (
            <nav className="navbar sticky-top navbar-expand-sm navbar-dark px-sm-5 nav-style">
                <Link to="/">
                    <img src={logo} alt="store" className="navbar-brand"/>
                </Link>
                <ul className="navbar-nav align-items-center mr-right ul-style">
                    <li className="nav-item ml-5">
                    <Link to="/">
                        <span className="text-white">Beranda</span>
                    </Link>
                    </li>
                    <li className="nav-item ml-5">
                    <Link to="/product">
                        <span className="text-white">Paket Kursus</span>
                    </Link>
                    </li>
                    <li className="nav-item ml-5">
                    <Link to="/galeri">
                        <span className="text-white">Kontak</span>
                    </Link>
                    </li>
                    <li className="nav-item ml-5">
                    <Link to="/profil">
                        <span className="text-white">Profil</span>
                    </Link>
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto">
                    <button className="btn btn-outline-warning my-2 my-sm-0 btn-style-1">
                        <i className="fas fa-cart-plus"/>
                        &nbsp;
                    </button>
                </Link>
            </nav>
        );
    }
}

export default Navbar;