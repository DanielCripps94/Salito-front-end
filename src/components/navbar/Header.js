import React from 'react';
import './headers.css'

const Header = (props) => {
    return (
        <nav className="navbar">
            <h1>Salito</h1>
            <div className="about">About</div>
            <div className="albums">Albums</div>
            <div className="login" onClick={props.toggleModal}>login</div>
        </nav>
    );
}

export default Header;

