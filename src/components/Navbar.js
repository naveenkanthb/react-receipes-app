import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link  className="navbar-brand">
                <img src={logo} alt="logo"/>
            </Link>
            <div className="collapse navbar-collapse show ml-sm-5">
                <ul className="navbar-nav">
                    <li className="navbar-item">
                        <Link className="nav-link" to="/">
                            Home
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link className="nav-link" to="/recipes">
                            Recipes
                        </Link>
                    </li>
                </ul>
            </div>

        </nav>
    )
}

