import React from 'react';
import './navbar.css';
import {Button, Form, FormControl, Nav, NavDropdown} from "react-bootstrap";
import Navbar from "react-bootstrap/lib/Navbar";


function Navbar1() {
    return (
        <Navbar>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <div className={"form-div"}>
                    <Form className={"form-inline"}>
                        <label>Pokémon PWA</label>
                        <div className={"search-nav"}>
                            <FormControl type={"text"} placeholder={"Search"}/>
                            <Button><i className="fa fa-search"></i></Button>
                        </div>
                    </Form>
                </div>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navbar1;

