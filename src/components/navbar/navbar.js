import React from 'react';
import './navbar.css';
import {Button, Form, FormControl, Nav, NavDropdown} from "react-bootstrap";
import Navbar from "react-bootstrap/lib/Navbar";


function Navbar1() {
    return (
        <Navbar>
            <Navbar.Collapse id="basic-navbar-nav">
            <Form className={"form-inline"}>
                <label>Pokémon PWA</label>
                <div className={"search-nav"}>
                    <FormControl type={"text"} placeholder={"Search"}/>
                    <Button>Search</Button>
                </div>
            </Form>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navbar1;

