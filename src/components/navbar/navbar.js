import React from 'react';
import './navbar.css';
import {Button, Form, FormControl, Nav, NavDropdown} from "react-bootstrap";


function Navbar() {
    return (
        <form className={"form-inline"}>
            <label>Pokémon PWA</label>
            <div className={"search-nav"}>
                <input type={"text"} placeholder={"Search"}/>
                <Button>Search</Button>
            </div>
        </form>
    );
}

export default Navbar;

