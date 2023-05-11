import { Navbar, Container } from 'react-bootstrap';
import React from 'react';

function Header() {
    return (
        <nav className="navbar navbar-expand-lg bg-success ">
            <div className="container-md">
                <a className="navbar-brand text-light fw-bold" href="/">Recolector</a>
            </div>
        </nav>
    );
}

export default Header;
