import React from 'react';
import './navbar.css';
import {Button, Form, FormControl} from "react-bootstrap";

function Navbar() {
    return (
        <div className="Navbar">
            <h2>Pokémon PWA</h2>
            <div className="Search">
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </div>

        </div>
    );
}

export default Navbar;

